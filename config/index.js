const processType = process.env.PROCESS_TYPE;

let config
try {
  console.log(processType);
  config = require(`./${processType}`);
} catch (e) {
  console.log(e);
  if (e.code === 'MODULE_NOT_FOUND') {
    throw new Error(`No config found for process type: ${processType}`);
  }
}

module.exports = config;
