// const http = require("http");
// const fs = require("fs");
// const path = require("path");
// const { resolveSoa } = require("dns");
const express = require("express");
// const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017",{
//   dbName: "backend"
// }) .then(() =>
//   console.log(" backend is connected"))
//   .catch((e)=> console.log("error"));

const app = express();
app.set("view engine", "ejs");

// app.get("/",(re,res)=>{
//    const pathl = path.resolve();
//    res.sendFile(path.join(pathl,"../client/index.html"));
// });
// const home = fs.readFileSync("../client/index.html",()=>{
//  res.end("vbhjx");
// });
// const server = http.createServer((req,res)=>{
//  // console.log("server is working");
//  if(req.url=="/")
//    res.end(home);
// });
app.get("/", async(req,res)=> {
   res.render("index2.ejs");
});

// const messgschema = new mongoose.Schema({
//   name : String,
//   email : String,
//   reply: String,
// });

// const message = mongoose.model("Message",messgschema)

// app.post("/contact", async(req,res)=>{
//  await message.create({   name: "nitesh3",   email:"xghfush@sbf", reply:"dgfuygbdb", }) 
//  .then(()=>{
//     res.send("xgbfuyj");
//   });
// });

app.listen(5500,()=>{
 console.log("server is working");
})