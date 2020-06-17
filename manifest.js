module.exports = {
  version: '1.0.0',
  init: (pluginContext) => {
     pluginContext.registerPolicy(require('./policies/request-metadata-headers.policy'))
  },
  policies: ['request-metadata-headers'],
  schema: {
    $id: 'N/A',
  }
}