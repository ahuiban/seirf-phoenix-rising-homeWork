const express = require("express");
const app = express();
const port = 3000;
const methodOverride = require("method-override");
// dataset:
const Pokemon = require("./models/pokemon.js");
// middleware:
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
// routes:
// INDEX
app.get("/pokemon", (req, res) => {
    res.render("index.ejs", { data: Pokemon });
});
// SHOW
app.get("/pokemon/:id", (req, res) => {
    res.render("show.ejs", { data: Pokemon[req.params.id] });
});
// Redirect root to /pokemon index:
app.get("/", (req, res) => {
    res.redirect("/pokemon");
});
// web server:
app.listen(port, () => {
    console.log(`Pokedex server is listening on port ${port}`);
});