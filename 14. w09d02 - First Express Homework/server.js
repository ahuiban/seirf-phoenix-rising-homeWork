// node server.js to listen to the server
// control+c to STOP the server and node server.js to refresh the server - will not work otherwise



const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("Hi from the back end.");
});


//greeting

app.get("/greeting/:name", (req, res) => {
    res.send("Hello, " + req.params.name + " It's so great to see you!");
});



app.listen(port, () => {
    console.log('listening on port', port);
});