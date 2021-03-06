/**
 * Server dependencies
 */

var express  = require('express')
  , passport = require('passport')
  , server   = express()
  ;


/**
 * Configuration
 */

require('./boot/server')(server);
require('./boot/passport')(passport);


/**
 * Routes
 */

require('./routes/discover')(server);
require('./routes/register')(server);
require('./routes/authorize')(server);
require('./routes/token')(server);
require('./routes/userinfo')(server);
require('./routes/signin')(server);
require('./routes/signup')(server);
require('./routes/signout')(server);
require('./routes/connect')(server);
require('./routes/verify')(server);
require('./routes/jwks')(server);


/**
 * REST Routes
 */

require('./routes/rest/v1/users')(server);
require('./routes/rest/v1/clients')(server);
require('./routes/rest/v1/scopes')(server);
require('./routes/rest/v1/roles')(server);
require('./routes/rest/v1/userRoles')(server);
require('./routes/rest/v1/roleScopes')(server);


/**
 * Error Handler
 */

require('./routes/error')(server);


/**
 * Start the server
 */

server.start = function () {
  server.listen(server.settings.port, function () {
    console.log(
      'Anvil Connect pid %s is running on port %s', process.pid, server.settings.port
    );
  });
};


/**
 * Exports
 */

module.exports = server;


/**
 * Start the server in shell from development directory
 */

if (!module.parent) {
  server.start()
}

