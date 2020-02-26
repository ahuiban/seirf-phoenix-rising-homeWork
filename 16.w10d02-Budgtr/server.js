
const express = require('express');
const app = express();
const port = 3000;
//configured express.static
app.use(express.static(__dirname + '/public'));

//db file
const Budget = require('./models/budget.js'
)


//routes

app.use((req, res, next) => {
    console.log('all routes')
    next()
})

app.use(express.urlencoded({ extended: false }));



app.get("/", (req, res) => {
    res.send("Budgtr server working");
});


app.listen(port, () => {
    console.log("serving up your budget on port ", port)
})