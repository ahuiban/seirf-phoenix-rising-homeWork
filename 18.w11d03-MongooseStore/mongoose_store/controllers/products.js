const express = require('express')
const router = express.Router()
const Product = require("./models/products.js");


// ROUTES

//JSON Route
router.get("/json", (req, res) => {
    Product.find({}, (error, products) => {

        return res.json(products)
    })
})

// NEW
router.get("/new", (req, res) => {
    res.render("new.ejs")
})

// DELETE
router.delete("/:id", (req, res) => {
    Product.findByIdAndDelete(req.params.id, (err, data) => {
        res.redirect('/products')
    })
})

// EDIT
router.get('/:id/edit', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        res.render(
            'edit.ejs',
            {
                products: foundProduct
            }
        )
    })
})

// PUT for Buy
router.put('/:id/buy', (req, res) => {

    Product.findById(req.params.id, (error, product) => {
        User.findByIdAndUpdate('5e5d465c8424640fc0989893', { $push: { shopping_cart: product.name } }, { new: true }, (err, updateUser) => {

        })
    })
    Product.findByIdAndUpdate(req.params.id, { $inc: { qty: -1 } }, { new: true }, (err, updateModel) => {
        res.redirect('/products')
    })

})

// PUT
router.put('/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updateModel) => {
        res.redirect('/products')
    })
})

// Create
router.post("/", (req, res) => {

    Product.create(req.body)
    res.redirect("/products")
})

// Index
router.get("/", (req, res) => {
    User.find({}, (error, users) => {
        Product.find({}, (error, products) => {
            res.render("index.ejs", {
                products,

            })
        })
    })
})

//SEED DATA ROUTE
router.get('/seed', async (req, res) => {
    const newProducts =
        [
            {
                name: 'Beans',
                description: 'A small pile of beans. Buy more beans for a big pile of beans.',
                img: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
                price: 5,
                qty: 99
            }, {
                name: 'Bones',
                description: 'It\'s just a bag of bones.',
                img: 'http://bluelips.com/prod_images_large/bones1.jpg',
                price: 25,
                qty: 0
            }, {
                name: 'Bins',
                description: 'A stack of colorful bins for your beans and bones.',
                img: 'http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg',
                price: 7000,
                qty: 1
            }
        ]

    try {
        const seedItems = await Product.create(newProducts)
        res.send(seedItems)
    } catch (err) {
        res.send(err.message)
    }
    res.redirect('/products')
})


// Show
router.get("/:id", (req, res) => {
    Product.findById(req.params.id, (err, showProducts) => {
        res.render("show.ejs", {
            products: showProducts
        })
    })
})



module.exports = router;