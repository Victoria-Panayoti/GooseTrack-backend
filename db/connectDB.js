const mongoose = require("mongoose");

const connectDB = (URI, opthions) => {
    return mongoose.connect(URI, opthions);
};

module.exports = connectDB;