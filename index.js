// server/index.js
const express = require("express");
const mongoose = require("mongoose");
const campaignRoutes = require("./server/routes/campaignRoutes");
// import cors from 'cors'
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

mongoose
    .connect(
        "mongodb+srv://mongo:mongo@cluster0.n7fwiex.mongodb.net/Donationpal",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(express.json());
app.use("/api", campaignRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
