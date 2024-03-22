const express = require("express");
const { MongoClient } = require("mongodb");
const crypto = require("crypto");
const app = express();
const  {port} = require('../Admin/Admin.js');

// const port = 3000;

app.use(express.json());

const uri = "mongodb://localhost:27017";
const dbName = "Smash-coaching-website";

app.post("/contact", async (req, res) => {
 const client = new MongoClient(uri);
 const { name, email, message } = req.body;

 try {
   await client.connect();
   const db = client.db(dbName);

   if (name == null || email == null || message == null) {
     res.json({ status: false, message: "All fields are required" });
   } else {
     const result = await db.collection("contact").insertOne({
       name,
       email,
       message,
     });
     if (result.acknowledged == true) {
       res.json({ status: true, message: "Message sent successfully" });
     } else {
       res.json({ status: false, message: "Message not sent" });
     }
   }
 } catch (error) {
   console.error("Error occurred:", error);
   res.status(500).send("Internal Server Error");
 } finally {
   await client.close();
 }
});

app.listen(port, () => {
 console.log(`Server listening at http://localhost:${port}`);
});
