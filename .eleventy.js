const { DateTime } = require("luxon");
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addFilter("dateDay", (dateObj) => { return DateTime.fromJSDate(dateObj).toFormat("dd"); });
  eleventyConfig.addFilter("dateMonth", (dateObj) => { return DateTime.fromJSDate(dateObj, { zone: 'utc' }).setLocale('pl').toFormat("LLL").toUpperCase(); });
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  return {
    markdownTemplateEngine: "njk", dataTemplateEngine: "njk", htmlTemplateEngine: "njk",
    dir: { input: ".", includes: "_includes", data: "_data", output: "_site" }
  };
};