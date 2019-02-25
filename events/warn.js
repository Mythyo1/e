module.exports = async (client, warn) => {
  const zaq = require('zaq');
 
  zaq.warn(warn.message, {
    detail: warn.message,
    executionTime: new Date(),
    sessionId: process.pid
  });
};
