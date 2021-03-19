const {resolve} = require('path');
const cwd = require('cwd');
const {start} = require('zipper-elasticsearch-local');

module.exports = async function startES() {
  const config = require(resolve(cwd(), 'jest-es-config.js'))();

  return start(config);
};
