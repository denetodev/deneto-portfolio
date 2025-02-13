const webpack = require("webpack");

module.exports = (config, options) => {
  // Substitua variáveis de ambiente durante o build
  config.plugins.push(
    new webpack.DefinePlugin({
      "process.env.GITHUB_TOKEN": JSON.stringify(process.env.GITHUB_TOKEN),
    })
  );

  return config;
};
