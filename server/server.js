const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use("/api/auth/", require("./routes/auth_router"));

app.listen(PORT, () => {
    console.log(`Server Running at Port ${PORT}`);
})


