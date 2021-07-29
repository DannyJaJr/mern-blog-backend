const express = require("express");
const bodyParser = require('body-parser')

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));




///endpoints
app.get("/hello", (req, res) => res.send("Hello"));
app.post("/hello", (req, res) => res.send(`hello ${req.body.name}`));


app.listen(8000, () => console.log("Listening on port 8000"));