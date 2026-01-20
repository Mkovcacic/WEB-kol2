const express = require("express");
const { MongoClient, ObjectId } = require('mongodb');
const port = 3000;

async function connect_to_db() {
    // Connection URL
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);

    // Database Name
    const dbName = 'wp_13';    

    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
  
    return db;
}

(async () => {
    const app = express();
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    const db = await connect_to_db();

    app.get("/api/files", (req, res) => {
        const files = [];
        res.send(files);
    });    

    app.post("/api/files/", (req, res) => {
        console.log(req.body);
        res.send({ message: "Received" });
    });

    app.listen(port, () => {
        console.log(`Express: I'm listening at ${port}`);
    });

})();