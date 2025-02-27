const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Diretório do build
const distDir = path.join(__dirname, "dist/portfolio/browser");

console.log("Executando otimizações finais...");

// 1. Gerar o build otimizado
console.log("Gerando build produtivo...");
execSync("ng build --configuration production", { stdio: "inherit" });

// 2. Otimizar imagens
console.log("Otimizando imagens...");
execSync("node optimize-images.js", { stdio: "inherit" });

// 3. Comprimir arquivos
console.log("Comprimindo arquivos estáticos...");
const compressFiles = (dir) => {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      compressFiles(filePath);
      return;
    }

    const ext = path.extname(file).toLowerCase();
    if ([".js", ".css", ".html", ".svg"].includes(ext)) {
      try {
        // Gerar versão gzip
        execSync(`gzip -9 -c "${filePath}" > "${filePath}.gz"`, {
          stdio: "inherit",
        });
        // Gerar versão brotli se disponível
        execSync(`brotli -q 11 -c "${filePath}" > "${filePath}.br"`, {
          stdio: "inherit",
        });
        console.log(`Comprimido: ${filePath}`);
      } catch (error) {
        console.error(`Erro ao comprimir ${filePath}:`, error.message);
      }
    }
  });
};

// 4. Executar PurgeCSS
console.log("Removendo CSS não utilizado...");
execSync("npx purgecss --config purgecss.config.js", { stdio: "inherit" });

// 5. Copiar .htaccess para o diretório de build
console.log("Copiando arquivo .htaccess...");
fs.copyFileSync(
  path.join(__dirname, ".htaccess"),
  path.join(distDir, ".htaccess")
);

// 6. Comprimir arquivos após todas as otimizações
try {
  compressFiles(distDir);
} catch (error) {
  console.error("Erro durante compressão:", error.message);
}

console.log("Build otimizado completo! Os arquivos estão prontos para deploy.");
