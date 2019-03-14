// env variables only exist into the OS that the app is running
require('dotenv').config()

const config = {
    // variables to read env
    dev: process.env.NODE_ENV !== 'production', // true
    port: process.env.PORT,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbName: process.env.DB_NAME
}

// Export as a property of the module
module.exports = { config }