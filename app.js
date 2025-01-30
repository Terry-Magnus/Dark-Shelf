const express = require("express");
const morgan = require("morgan")
const cors = require("cors");

const CONFIG = require("./config/config")
const connectDB = require("./config/db");
const bookRouter = require("./routes/bookRouter");


const app = express();
const port = CONFIG.ENV.PORT;

// Middleware
app.use(express.json());
app.use(cors());
app.use(
    cors({ origin: "*", methods: ["GET", "POST", "PUT", "PATCH", "DELETE"] }),
);
app.use(morgan("tiny"));

// Routes
app.use("/api/v1/books", bookRouter);


//Initiate Database 
connectDB();

// Start Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
