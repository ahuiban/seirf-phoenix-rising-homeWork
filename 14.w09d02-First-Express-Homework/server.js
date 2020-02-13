// node server.js to listen to the server



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




/// tip calculator

app.get('/tip/:total/:tipPercentage', (req, res) => {
    let tip = parseInt(req.params.total) * parseInt(req.params.tipPercentage) / 100
    res.send('Tip: ' + tip)
});


/// magic 8 ball


app.get('/magic/:phrase', (req, res) => {
    let magicArr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]
    let magicNum = Math.floor(Math.random() * magicArr.length)
    let answer = magicArr[responseNum]
    res.send(`
            <html>
            <body>
            ${req.params.phrase}
            <h1>${answer}</h1>
            ${magicNum}
            </body>
            <html`
    )
});







app.listen(port, () => {
    console.log('listening on port', port);
});


