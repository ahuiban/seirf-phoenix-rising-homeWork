/*
To start:
npm init
npm i express ejs method-override mongoose
nodemon
*/

/*

RESTful Routes
#	Action	|URL	        |HTTP Verb	|EJS view 	|mongoose method
1	Index	|/products/         |GET        |index.ejs  |Product.find()
2	Show	|/products/:id      |GET        |show.ejs   |Product.findById()
3	New	    |/products/new      |GET        |new.ejs	|none
4	Create	|/products/	        |POST       |none       |Product.create(req.body)
5	Edit	|/products/:id/edit	|GET        |edit.ejs   |Product.findById()
6	Update	|/products/:id      |PUT        |none       |Product.findByIdAndUpdate()
7	Destroy	|/products/:id      |DELETE     |none       |Product.findByIdAndDelete()

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