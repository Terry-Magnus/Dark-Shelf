const dotenv = require('dotenv');

// Load environment variables from a .env file
dotenv.config({ path: ".env", debug: true, override: true });


// Create the configuration object with default values
const CONFIG = {
    ENV: {
        PORT: parseInt(process.env.PORT ?? "5000"),
        MONGODB_URI: process.env.MONGODB_URI,
    },
};

module.exports = CONFIG;
