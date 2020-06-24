module.exports = {
  name: 'request-metadata-headers',
  schema: {
    $id: 'N/A',
  },
  policy: () => {
    return (req, res, next) => {
      const ip = req.headers['x-origin-client-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress.replace(/[:f]/g, '');
      const userAgent = req.headers['x-origin-client-user-agent'] || req.get('user-agent');
      if (ip) req.headers['x-origin-client-ip'] = ip;
      if (userAgent) req.headers['x-origin-client-user-agent'] = userAgent;
      next();
    };
  },
};