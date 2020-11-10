const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

const port = process.env.PORT || 3000;

dotenv.config();

app.use(morgan("tiny"));
app.use(express.json());
app.use(helmet());
app.use(cors());

mongoose.connect(process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log("Connected to database");
    });

app.use("/api/user", authRoute);

app.listen(port, () => console.log("Server running on port " + port));