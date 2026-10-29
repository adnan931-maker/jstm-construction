const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function cleanLogo() {
  const inputPath = path.resolve(__dirname, '../stitch_jstm_construction_website (2)/JSTM LOGO.jpg');
  const outDir = path.resolve(__dirname, '../public/assets/images');

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const isBg = new Uint8Array(width * height); // 1 = background

  function isBgColor(r, g, b) {
    // Background is textured off-white with R, G, B > 215
    return r > 212 && g > 215 && b > 208;
  }

  // BFS Queue for flood filling from the 4 corners/edges
  const queue = new Int32Array(width * height);
  let qStart = 0;
  let qEnd = 0;

  function push(x, y) {
    const idx = y * width + x;
    if (isBg[idx] === 0) {
      isBg[idx] = 1;
      queue[qEnd++] = idx;
    }
  }

  // Seed with all edge pixels
  for (let x = 0; x < width; x++) {
    const topIdx = x * channels;
    if (isBgColor(data[topIdx], data[topIdx + 1], data[topIdx + 2])) push(x, 0);

    const botIdx = ((height - 1) * width + x) * channels;
    if (isBgColor(data[botIdx], data[botIdx + 1], data[botIdx + 2])) push(x, height - 1);
  }

  for (let y = 0; y < height; y++) {
    const leftIdx = y * width * channels;
    if (isBgColor(data[leftIdx], data[leftIdx + 1], data[leftIdx + 2])) push(0, y);

    const rightIdx = (y * width + (width - 1)) * channels;
    if (isBgColor(data[rightIdx], data[rightIdx + 1], data[rightIdx + 2])) push(width - 1, y);
  }

  // Run BFS flood fill
  while (qStart < qEnd) {
    const curr = queue[qStart++];
    const x = curr % width;
    const y = Math.floor(curr / width);

    // 4 neighbors
    const neighbors = [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1],
    ];

    for (let i = 0; i < 4; i++) {
      const nx = neighbors[i][0];
      const ny = neighbors[i][1];
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nIdx = ny * width + nx;
        if (isBg[nIdx] === 0) {
          const p = nIdx * channels;
          if (isBgColor(data[p], data[p + 1], data[p + 2])) {
            isBg[nIdx] = 1;
            queue[qEnd++] = nIdx;
          }
        }
      }
    }
  }

  // Also handle holes that should be transparent (like inside crane truss or between letters if isolated)
  // Any large group of pixels with r,g,b > 220 that isn't window panes
  // Let's check window panes: window is at x: 750-950, y: 700-880. Those panes stay white!
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      // Do not make window panes transparent
      const isWindowPane = x > 720 && x < 950 && y > 680 && y < 880;
      if (!isWindowPane && isBg[idx] === 0) {
        const p = idx * channels;
        const r = data[p];
        const g = data[p + 1];
        const b = data[p + 2];
        if (r > 228 && g > 232 && b > 225) {
          isBg[idx] = 1;
        }
      }
    }
  }

  // Now create outputs
  const transparentLogo = Buffer.from(data);
  const darkThemeLogo = Buffer.from(data);

  // Find tight bounding box of logo
  let minX = width, maxX = 0, minY = height, maxY = 0;
  let emblemMinX = width, emblemMaxX = 0, emblemMinY = height, emblemMaxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      const p = idx * channels;

      if (isBg[idx] === 1) {
        transparentLogo[p + 3] = 0;
        darkThemeLogo[p + 3] = 0;
      } else {
        // Anti-aliasing fringe suppression:
        // If pixel is near-white background (feather edge)
        const r = data[p];
        const g = data[p + 1];
        const b = data[p + 2];
        const brightness = (r + g + b) / 3;

        if (brightness > 200) {
          const alpha = Math.max(0, Math.min(255, Math.round((225 - brightness) * 10)));
          transparentLogo[p + 3] = alpha;
          darkThemeLogo[p + 3] = alpha;
        }

        // Bounding box tracking
        if (transparentLogo[p + 3] > 30) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;

          // Emblem is roughly top 60%
          if (y < 1250) {
            if (x < emblemMinX) emblemMinX = x;
            if (x > emblemMaxX) emblemMaxX = x;
            if (y < emblemMinY) emblemMinY = y;
            if (y > emblemMaxY) emblemMaxY = y;
          }
        }

        // Dark theme: transform dark charcoal text & borders into crisp white for dark navbar
        if (y > 1180 && transparentLogo[p + 3] > 0) {
          // If this is the dark text (not the green accents)
          const isGreen = g > r + 30 && g > b + 20;
          if (!isGreen && brightness < 110) {
            darkThemeLogo[p] = 248;     // White
            darkThemeLogo[p + 1] = 250;
            darkThemeLogo[p + 2] = 252;
          }
        }
      }
    }
  }

  console.log(`Full Logo Bounding Box: [${minX}, ${minY}] to [${maxX}, ${maxY}]`);
  console.log(`Emblem Bounding Box: [${emblemMinX}, ${emblemMinY}] to [${emblemMaxX}, ${emblemMaxY}]`);

  const pad = 24;

  // 1. Save full cropped transparent logo
  const logoCropX = Math.max(0, minX - pad);
  const logoCropY = Math.max(0, minY - pad);
  const logoCropW = Math.min(width - logoCropX, (maxX - minX) + pad * 2);
  const logoCropH = Math.min(height - logoCropY, (maxY - minY) + pad * 2);

  await sharp(transparentLogo, { raw: { width, height, channels: 4 } })
    .extract({ left: logoCropX, top: logoCropY, width: logoCropW, height: logoCropH })
    .png()
    .toFile(path.join(outDir, 'jstm-logo-clean.png'));
  console.log('Saved jstm-logo-clean.png');

  // 2. Save dark theme cropped logo (white text for dark headers)
  await sharp(darkThemeLogo, { raw: { width, height, channels: 4 } })
    .extract({ left: logoCropX, top: logoCropY, width: logoCropW, height: logoCropH })
    .png()
    .toFile(path.join(outDir, 'jstm-logo-dark-theme.png'));
  console.log('Saved jstm-logo-dark-theme.png');

  // 3. Save emblem only
  const embCropX = Math.max(0, emblemMinX - pad);
  const embCropY = Math.max(0, emblemMinY - pad);
  const embCropW = Math.min(width - embCropX, (emblemMaxX - emblemMinX) + pad * 2);
  const embCropH = Math.min(height - embCropY, (emblemMaxY - emblemMinY) + pad * 2);

  await sharp(transparentLogo, { raw: { width, height, channels: 4 } })
    .extract({ left: embCropX, top: embCropY, width: embCropW, height: embCropH })
    .png()
    .toFile(path.join(outDir, 'jstm-emblem.png'));
  console.log('Saved jstm-emblem.png');

  // 4. Also create square high-res app icon / favicon from emblem (512x512)
  await sharp(path.join(outDir, 'jstm-emblem.png'))
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(outDir, 'jstm-icon-512.png'));
  console.log('Saved jstm-icon-512.png');

  console.log('Done!');
}

cleanLogo().catch(console.error);
