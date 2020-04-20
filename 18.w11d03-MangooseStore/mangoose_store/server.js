/*
To start:
npm init
npm i express ejs method-override mongoose
nodemon
*/


const express = require('express')
const app = express()
const port = 3000;
const mongoose = require("mongoose")
const methodOverride = require("method-override")


app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))




// Connect 
mongoose.connect("mongodb://localhost:27017/mongoose_store", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once("open", () => {
    console.log("connected to Mongo");
});


const productsController = require('./controllers/products.js')
app.use('/products', productsController)

const usersController = require('./controllers/users.js')
app.use('/users', usersController)


//redirect route
app.get('/', (req, res) => {
    res.redirect('/products')
})


// web server
app.listen(port, () => {
    console.log("listening on port ", port)
})  