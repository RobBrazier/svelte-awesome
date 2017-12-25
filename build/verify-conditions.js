const SRError = require('@semantic-release/error');

module.exports = function (pluginConfig, config, callback) {
  if (process.env.SEMAPHORE !== 'true') {
    throw new SRError(
      'semantic-release didn\'t run on Semaphore CI and therefore a new version won\'t be published.',
      'ENOSEMAPHORE'
    );
  }
};
