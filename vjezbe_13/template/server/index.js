const express = require("express");
const port = 3000;

const app = express();

app.use(express.static("../client/"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Express.js is listening at ${port}`);
});