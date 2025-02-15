const fs = require("fs");
const path = require("path");
require("dotenv").config();

const envFilePath = path.join(__dirname, "src", "env.js");

const envContent = `
(function(window) {
  window.__env = window.__env || {};
  window.__env.GITHUB_TOKEN = '${process.env.GITHUB_TOKEN || ""}';
})(this);
`;

fs.writeFileSync(envFilePath, envContent);
console.log("Environment variables injected into env.js");
