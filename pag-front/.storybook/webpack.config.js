const path = require('path');
const webpack = require('../node_modules/@storybook/core/node_modules/webpack');

module.exports = (baseConfig, env, config) => {
  config.resolve = {
    ...config.resolve,
    alias: {
      src: path.resolve(__dirname, '../src')
    }
  };
  return config;
}
