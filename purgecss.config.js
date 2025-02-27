module.exports = {
  content: ["./src/**/*.{html,ts}"],
  css: ["./dist/portfolio/browser/styles.css"],
  output: "./dist/portfolio/browser/styles.purged.css",
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  safelist: {
    standard: [/^p-/, /^pi-/, /^ui-/, /^ng-/],
    deep: [/p-.*/, /pi-.*/, /ui-.*/, /ng-.*/],
    greedy: [/p-.*:.*/, /pi-.*:.*/, /ui-.*:.*/, /ng-.*:.*/],
  },
};
