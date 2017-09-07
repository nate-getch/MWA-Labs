const dns = require('dns');
var site = "www.mum.edu";

dns.resolve4(site, (err, addresses) => {
    if (err) throw err;
    console.log(`addresses: ${addresses}`);
  });