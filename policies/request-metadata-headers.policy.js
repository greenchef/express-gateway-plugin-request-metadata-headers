module.exports = {
  name: 'request-metadata-headers',
  schema: {
    $id: 'N/A',
  },
  policy: () => {
    return (req, res, next) => {
      const ip = req.headers['x-origin-client-ip'] || req.connection.remoteAddress.replace(/[:f]/g, '');
      const userAgent = req.headers['x-origin-client-user-agent'] || req.get('user-agent');
      console.log(ip),
      console.log(userAgent)
      req.headers['x-origin-client-ip'] = ip;
      req.headers['x-origin-client-user-agent'] = userAgent;
      next();
    };
  },
};