const express=require("express");
const app = express();

require('dotenv').config();
require("./db")();

app.use(express.json());

const personnelRouter= require('./controller/personnel');
app.use('/personnel', personnelRouter);

app.get("/",(req,res)=>{
    res.send("Get endpoint success")
})

app.listen(3000,()=>{
    console.log("Listening port 3000");
})