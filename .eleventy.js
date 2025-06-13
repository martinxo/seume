module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets/css");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets/css");
  eleventyConfig.addPassthroughCopy("assets/img");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};

