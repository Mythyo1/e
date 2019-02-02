//Check if the node version is 8.0.0+
if (Number(process.version.slice(1).split('.')[0]) < 8) throw new Error('NodeJS 8.0.0 or higher is required. Re-run this with NodeJS 8.0.0+');

require('./npm.js');
