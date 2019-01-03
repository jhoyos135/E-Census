var localtunnel = require('localtunnel');
localtunnel(4000, { subdomain: 'sjdlfjsdflkj' }, function(err, tunnel) {
  console.log('LT running')
});