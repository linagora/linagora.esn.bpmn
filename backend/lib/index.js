'use strict';

module.exports = function(dependencies) {
  const api = {};
  const config = require('./config')(dependencies);

  function register() {
    config.register();
  }

  return {
    api,
    register
  };
};
