const htmlmin = require('html-minifier');
const yaml = require('js-yaml');

/**
 * See https://www.11ty.dev/docs/config/
 */
module.exports = (config) => {
  config.setTemplateFormats(['njk']);

  // Support YAML data
  config.addDataExtension('yml', (contents) => yaml.safeLoad(contents));

  config.addPassthroughCopy('./src/build/');
  config.addPassthroughCopy({ './src/assets/images/': 'images' });
  config.addPassthroughCopy('./src/robots.txt');

  if (process.env.ELEVENTY_ENV === 'development') {
    config.setUseGitIgnore(false);
    config.setWatchThrottleWaitTime(200);

    // Watch assets built by webpack
    config.addWatchTarget('./src/build/');
  }

  if (process.env.ELEVENTY_ENV === 'production') {
    // Minify HTML
    config.addTransform('htmlmin', function (content, outputPath) {
      if (outputPath.endsWith('.html')) {
        return htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true
        });
      } else {
        return content;
      }
    });
  }

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    htmlTemplateEngine: 'njk',
  };
};
