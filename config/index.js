const processType = process.env.PROCESS_TYPE;

let config;
try {
  config = require(`./${processType}`)
} catch (e) {
  if (e.code === 'MODULE_NOT_FOUND') {
    throw new Error(`No config found for process type: ${processType}`);
  }
  throw e;
}

module.exports = config;
