const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT || 62354,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost/ecommerce-site',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
    accessKeyId: process.env.accessKeyId || 'accessKeyId',
    secretAccessKey: process.env.secretAccessKey || 'secretAccessKey',
}