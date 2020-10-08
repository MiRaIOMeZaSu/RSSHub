const app = require('./app');
const logger = require('./utils/logger');

server = app.listen(1200, '127.0.0.1');
logger.info('Listening Port ' + config.connect.port);
logger.info('🎉 RSSHub start! Cheers!');
module.exports = server;
