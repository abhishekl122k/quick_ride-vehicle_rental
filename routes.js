const routes = require('next-routes')();

routes
    .add('/campaigns/new','/campaigns/new')
    .add('/campaigns/ride','/campaigns/ride')
    .add('/campaigns/:address','/campaigns/show');


module.exports = routes;