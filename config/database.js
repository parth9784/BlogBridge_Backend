const mongoose = require("mongoose");
require("dotenv").config();

async function dbconnect() {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Database Connected...");
    } catch (error) {
        console.error("Database connection error:", error);
    }
}

module.exports = { dbconnect };
