const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createFavicons() {
  const emblemPath = path.resolve(__dirname, '../public/assets/images/jstm-emblem-white.png');
  const appDir = path.resolve(__dirname, '../src/app');
  const publicDir = path.resolve(__dirname, '../public');

  if (!fs.existsSync(emblemPath)) {
    throw new Error('Emblem not found at: ' + emblemPath);
  }

  console.log('Generating crisp JSTM Construction favicons...');

  // 1. Generate master high-res 512x512 icon
  const size = 512;
  const cornerRadius = 110;
  const strokeWidth = 14;
  
  // Create rounded squircle background with emerald accent border
  const svgBackground = `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#141E33" />
          <stop offset="50%" stop-color="#0E1626" />
          <stop offset="100%" stop-color="#070B14" />
        </linearGradient>
        <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#34D399" />
          <stop offset="50%" stop-color="#10B981" />
          <stop offset="100%" stop-color="#059669" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#10B981" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#10B981" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect x="${strokeWidth/2}" y="${strokeWidth/2}" width="${size - strokeWidth}" height="${size - strokeWidth}" rx="${cornerRadius}" fill="url(#bgGrad)" stroke="url(#borderGrad)" stroke-width="${strokeWidth}" />
      <circle cx="${size/2}" cy="${size/2}" r="${size*0.42}" fill="url(#glow)" />
    </svg>
  `;

  const bgBuffer = await sharp(Buffer.from(svgBackground)).png().toBuffer();

  // Resize emblem to fit nicely within squircle with generous padding
  const emblemSize = 340;
  const resizedEmblem = await sharp(emblemPath)
    .resize(emblemSize, emblemSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  // Composite 512x512
  const master512 = await sharp(bgBuffer)
    .composite([{ input: resizedEmblem, gravity: 'center' }])
    .png()
    .toBuffer();

  // Save 512x512
  fs.writeFileSync(path.join(appDir, 'icon.png'), master512);
  fs.writeFileSync(path.join(publicDir, 'icon-512.png'), master512);
  console.log('✓ Created 512x512 icon.png');

  // 2. Generate Apple Touch Icon 180x180
  const apple180 = await sharp(master512)
    .resize(180, 180, { fit: 'contain' })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), apple180);
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), apple180);
  console.log('✓ Created 180x180 apple-icon.png');

  // 3. Generate 32x32, 16x16, 48x48 PNGs
  const png32 = await sharp(master512)
    .resize(32, 32, { fit: 'contain' })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), png32);

  const png16 = await sharp(master512)
    .resize(16, 16, { fit: 'contain' })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), png16);

  const png48 = await sharp(master512)
    .resize(48, 48, { fit: 'contain' })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon-48x48.png'), png48);

  // 4. Generate multi-resolution favicon.ico containing 16x16, 32x32, 48x48
  function createIco(images) {
    const numImages = images.length;
    const headerSize = 6;
    const dirEntrySize = 16;
    const totalHeaderSize = headerSize + (dirEntrySize * numImages);

    let offset = totalHeaderSize;
    const entries = [];

    for (const img of images) {
      entries.push({
        width: img.width >= 256 ? 0 : img.width,
        height: img.height >= 256 ? 0 : img.height,
        colorCount: 0,
        reserved: 0,
        planes: 1,
        bitCount: 32,
        bytesInRes: img.buffer.length,
        imageOffset: offset,
        buffer: img.buffer
      });
      offset += img.buffer.length;
    }

    const icoBuffer = Buffer.alloc(offset);
    icoBuffer.writeUInt16LE(0, 0); // reserved
    icoBuffer.writeUInt16LE(1, 2); // icon type (1 = ICO)
    icoBuffer.writeUInt16LE(numImages, 4); // count

    let entryOffset = headerSize;
    for (const entry of entries) {
      icoBuffer.writeUInt8(entry.width, entryOffset);
      icoBuffer.writeUInt8(entry.height, entryOffset + 1);
      icoBuffer.writeUInt8(entry.colorCount, entryOffset + 2);
      icoBuffer.writeUInt8(entry.reserved, entryOffset + 3);
      icoBuffer.writeUInt16LE(entry.planes, entryOffset + 4);
      icoBuffer.writeUInt16LE(entry.bitCount, entryOffset + 6);
      icoBuffer.writeUInt32LE(entry.bytesInRes, entryOffset + 8);
      icoBuffer.writeUInt32LE(entry.imageOffset, entryOffset + 12);
      entry.buffer.copy(icoBuffer, entry.imageOffset);
      entryOffset += dirEntrySize;
    }

    return icoBuffer;
  }

  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: png16 },
    { width: 32, height: 32, buffer: png32 },
    { width: 48, height: 48, buffer: png48 }
  ]);

  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('✓ Created multi-resolution favicon.ico (16x16, 32x32, 48x48)');

  // 5. Generate high-quality icon.svg
  const base64Png = master512.toString('base64');
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <image width="512" height="512" href="data:image/png;base64,${base64Png}" />
</svg>`;
  fs.writeFileSync(path.join(appDir, 'icon.svg'), svgContent);
  console.log('✓ Created clean icon.svg');

  console.log('All favicon files successfully updated!');
}

createFavicons().catch(err => {
  console.error(err);
  process.exit(1);
});
