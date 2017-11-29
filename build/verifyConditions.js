const SRError = require('@semantic-release/error');

module.exports = (pluginConfig, config, callback) {
  if (config.env.SEMAPHORE === 'true') {
      callback(null);
  } else {
      callback(new SRError('Not running on Semaphore, won\'t be published.'));
  }
}
