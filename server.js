const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes")
const bodyParser = require("body-parser")

const app = express();

const PORT = process.env.PORT || 8000

mongoose.connect( `mongodb+srv://Admin:Admin123@cluster0.nqclt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

app.use(express.json());
app.use(express.urlencoded());
app.use(router);

app.listen(PORT, () =>{
    console.log("Listening on port " + PORT);
})

app.get('/testing', (req, res) => {
    res.send({ yeah: "it works" });
})  