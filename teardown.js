const {stop} = require('zipper-elasticsearch-local');

module.exports = async function stopES() {
  await stop();
};
