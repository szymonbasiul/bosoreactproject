
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();


app.use(express.json())

app.use(cors());
app.post("/", (req, res)=>{
    console.log(req.body)
    res.send(req.body)
})




const db = mysql.createConnection({
    user: "root",
    host: "127.0.0.1:3306",
    password: "test",
    database: "signin"
    
});

app.post("/signin", (req, res) => {
    console.log(res.body)
    const username = "";
    const surname = "";
    const email = "";
    res.send("ok")
    db.query("INSERT INTO users (name, surname, email) VALUES (?,?,?)", [username, surname, email])
})




app.listen(8000, ()=>{
    console.log("Stoi")
})