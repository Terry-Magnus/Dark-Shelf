const mongoose = require("mongoose");
const CONFIG = require("./config");

const connectDB = async () => {
    const MONGODB_URI = CONFIG.ENV.MONGODB_URI;

    try {
        if (!MONGODB_URI) return;

        await mongoose.connect(MONGODB_URI);
        console.log("Dark Shelf connected successfully");
    } catch (error) {
        console.error("Dark Shelf connection error:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
