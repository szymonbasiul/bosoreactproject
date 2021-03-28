
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const { isCompositeComponent } = require("react-dom/test-utils");
const app = express();


app.use(express.json())

app.use(cors());
app.post("/", (req, res) => {
    console.log(req.body)
    res.send(req.body)
})




const db = mysql.createConnection({
    user: "root",
    host: "127.0.0.1",
    password: "test",
    database: "signin"

});

app.post("/signin", (req, res) => {

    const dataFromClient = req.body;

    const username = dataFromClient.name;
    const surname = dataFromClient.surname;
    const email = dataFromClient.email;

    res.send("ok")

    db.query("INSERT INTO users (name, surname, email) VALUES (?,?,?)",
        [username, surname, email], (err) => console.log(err))
    console.log('sent to database:', dataFromClient)
})




app.listen(8000, () => {
    console.log("Stoi")
})