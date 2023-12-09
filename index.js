const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes = require("./routes")

dotenv.config();

const PORT = process.env.PORT;
const app = express();

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => console.log(error));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: "This is sample route" })
})

app.use("/", routes)

app.listen(PORT, async () => {
    console.log("PORT IS RUNNING ON ", PORT);
});
