const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const db = require("./models/database.js");
const userRoutes = require("./routes/userRoutes.js");
const app= express();

app.use(bodyParser.json());
const PORT = process.env.PORT || 3000; // Default port 3000 if PORT environment variable is not set

// MongoDB connection check
db.on("error", (error) => {
    console.log("MongoDB connection error", error);
});

db.once("open", () => {
    console.log("Connected to MongoDB");
});

// User Routes endpoints
app.use('/api', userRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
});

// To close connection to MongoDB
process.on("SIGINT", () => {
    mongoose.connection.close(() => {
        console.log("Closed MongoDB connection on termination");
        process.exit(0); // Exit process
    });
});
