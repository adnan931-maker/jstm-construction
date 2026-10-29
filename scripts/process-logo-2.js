const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processLogo2() {
  const inputPath = path.resolve(__dirname, '../stitch_jstm_construction_website (2)/jstm logo 2.jpg');
  const outDir = path.resolve(__dirname, '../public/assets/images');

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // 1. Copy original file
  fs.copyFileSync(inputPath, path.join(outDir, 'jstm-logo-2.jpg'));
  console.log('Copied original to jstm-logo-2.jpg');

  // Load raw RGBA
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log(`Dimensions: ${width}x${height}`);

  // Background sample at (10, 10)
  const bgR = data[0];
  const bgG = data[1];
  const bgB = data[2];
  console.log(`Background sample: (${bgR}, ${bgG}, ${bgB})`);

  // Create transparent buffer:
  // In jstm logo 2, artwork is white (RGB ~ 250+), background is dark navy (RGB ~ 10, 17, 30).
  const transData = Buffer.from(data);

  let minX = width, maxX = 0, minY = height, maxY = 0;
  let emblemMinX = width, emblemMaxX = 0, emblemMinY = height, emblemMaxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const brightness = (r + g + b) / 3;

      if (brightness < 45) {
        // Complete background
        transData[idx + 3] = 0;
      } else if (brightness < 160) {
        // Anti-aliased edge
        const alpha = Math.round(((brightness - 45) / 115) * 255);
        transData[idx + 3] = alpha;
        // Make sure RGB is pure white so anti-aliasing doesn't have dark fringe
        transData[idx] = 255;
        transData[idx + 1] = 255;
        transData[idx + 2] = 255;
      } else {
        // Solid white artwork
        transData[idx] = 255;
        transData[idx + 1] = 255;
        transData[idx + 2] = 255;
        transData[idx + 3] = 255;

        // Track bounding boxes
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;

        // Emblem is roughly the top 65% of the height
        if (y < 1050) {
          if (x < emblemMinX) emblemMinX = x;
          if (x > emblemMaxX) emblemMaxX = x;
          if (y < emblemMinY) emblemMinY = y;
          if (y > emblemMaxY) emblemMaxY = y;
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

  await sharp(transData, { raw: { width, height, channels: 4 } })
    .extract({ left: logoCropX, top: logoCropY, width: logoCropW, height: logoCropH })
    .png()
    .toFile(path.join(outDir, 'jstm-logo-white-transparent.png'));
  console.log('Saved jstm-logo-white-transparent.png');

  // 2. Save emblem only
  const embCropX = Math.max(0, emblemMinX - pad);
  const embCropY = Math.max(0, emblemMinY - pad);
  const embCropW = Math.min(width - embCropX, (emblemMaxX - emblemMinX) + pad * 2);
  const embCropH = Math.min(height - embCropY, (emblemMaxY - emblemMinY) + pad * 2);

  await sharp(transData, { raw: { width, height, channels: 4 } })
    .extract({ left: embCropX, top: embCropY, width: embCropW, height: embCropH })
    .png()
    .toFile(path.join(outDir, 'jstm-emblem-white.png'));
  console.log('Saved jstm-emblem-white.png');

  // 3. Create square app icon / favicon (512x512) with the white emblem on dark squircle
  const iconBase = await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 11, g: 17, b: 30, alpha: 1 },
    },
  }).png().toBuffer();

  const resizedEmblem = await sharp(path.join(outDir, 'jstm-emblem-white.png'))
    .resize(380, 380, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp(iconBase)
    .composite([{ input: resizedEmblem, gravity: 'center' }])
    .png()
    .toFile(path.join(outDir, 'jstm-icon-512.png'));

  // Copy to src/app/icon.png
  fs.copyFileSync(path.join(outDir, 'jstm-icon-512.png'), path.resolve(__dirname, '../src/app/icon.png'));
  console.log('Updated src/app/icon.png');

  console.log('Done!');
}

processLogo2().catch(console.error);
