const express = require("express");

const app = express();

const port = 3000;


app.get("/", (req, res) => {
    res.send("99 Bottles of beer on the wall");
});






app.listen(port, () => {
    console.log('listening on port', port);
});