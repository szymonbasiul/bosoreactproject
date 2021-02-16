const express = require("express");
const cors = require("cors");
const app = express();


app.use(express.json())
app.use(cors());
app.post("/", (req, res)=>{
    console.log(req.body)
    res.send(req.body)
})




app.listen(8000, ()=>{
    console.log("Stoi")
})