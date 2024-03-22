// backend.js

const express = require("express");
const { MongoClient } = require("mongodb");
const crypto = require("crypto");

function startServer(port) {
  const app = express();

  app.use(express.json());

  const uri = "mongodb://localhost:27017";
  const dbName = "Smash-coaching-website";

  app.post("/user/signup", async (req, res) => {
    const client = new MongoClient(uri);
    const { email, name, mobile, password } = req.body;
    const hashedPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    try {
      await client.connect();
      const db = client.db(dbName);

      const check = await db.collection("users").findOne({ email });
      if (check != null) {
        const resp = { status: false, message: "User already exists" };
        res.json(resp);
      } else {
        const result = await db.collection("users").insertOne({
          email,
          name,
          mobile,
          password: hashedPassword,
        });
        if (result.acknowledged == true) {
          res.json({ status: true, message: "User created successfully" });
        } else {
          res.json({ status: false, message: "User not created" });
        }
      }
    } catch (error) {
      console.error("Error occurred:", error);
      res.status(500).send("Internal Server Error");
    } finally {
      await client.close();
    }
  });

  app.post("/user/login", async (req, res) => {
    const client = new MongoClient(uri);
    const { email, password } = req.body;
    const hashedPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    try {
      const query = { email: email };

      await client.connect();
      const db = client.db(dbName);

      const result = await db.collection("users").findOne(query);
      if (result == null) {
        res.json({ status: false, message: "User not exits" });
      } else if (result.password != hashedPassword) {
        res.json({ status: false, message: "Password is incorrect" });
      } else {
        res.json({ status: true, message: "Login successful", result });
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
}

module.exports = { startServer };
