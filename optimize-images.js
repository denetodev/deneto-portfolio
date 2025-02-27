const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "src/assets/images";
const outputDir = "dist/portfolio/browser/assets/images";

// Certifique-se de que o diretório de saída existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Processe todas as imagens no diretório de entrada
fs.readdirSync(inputDir).forEach((file) => {
  const inputPath = path.join(inputDir, file);
  const fileInfo = path.parse(file);

  // Pule se não for uma imagem
  if (![".jpg", ".jpeg", ".png"].includes(fileInfo.ext.toLowerCase())) {
    return;
  }

  const outputWebp = path.join(outputDir, `${fileInfo.name}.webp`);
  const outputAvif = path.join(outputDir, `${fileInfo.name}.avif`);

  // Converta para WebP
  sharp(inputPath)
    .webp({ quality: 80 })
    .toFile(outputWebp)
    .then(() => console.log(`Converted to WebP: ${outputWebp}`))
    .catch((err) => console.error(`Error converting to WebP: ${err}`));

  // Converta para AVIF
  sharp(inputPath)
    .avif({ quality: 65 })
    .toFile(outputAvif)
    .then(() => console.log(`Converted to AVIF: ${outputAvif}`))
    .catch((err) => console.error(`Error converting to AVIF: ${err}`));
});
