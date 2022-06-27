const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;

//middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.static("uploads"));

//connection database
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})
.then(() => console.log('connected to the database!'))
.catch((err) =>console.log(err));

//router
app.use("/api/port", require("./routes/routes"));

app.listen(port, () => console.log(`server running at http://localhost:${port}`));


