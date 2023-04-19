const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productRoute = require("./routes/products");
const cors = require('cors');

dotenv.config();

const MONGO_URL = process.env.MONGO_URL
mongoose
.connect(MONGO_URL)
.then(() => console.log("DB Connection established"))
.catch((err) => {
    console.log(err);
})

app.use(cors());
app.use(express.json());
app.use("/api/products", productRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running" + "-" + process.env.PORT);
});