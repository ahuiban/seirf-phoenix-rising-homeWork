const express = require("express");
const app = express();
const PORT = 3003;
const mongoose = require("mongoose");
const animalsController = require("./controllers/animal.js");

const cors = require("cors");

// Error / Disconnection
mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

mongoose.connect("mongodb://localhost:27017/animals", {
  useNewUrlParser: true,
  useUnifiedTopoloogy: false,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

//load CORS middleware
const whitelist = [
  "http://localhost:3000",
  "https://fathomless-sierra-68956.herokuapp.com",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

//remove corsOptions below to whitelist everyone: which allows everyone to use it
//keep corsOption below on production and secure enviroment
app.use(cors()); // Note: all routes are now exposed. If you want to limit access for specific verbs like POST or DELETE you can look at the npm documentaion for cors (for example with OMDB - it's ok for anyone to see the movies, but you don't want just anyone adding a movie)

//middleware
app.use(express.json()); //use .json(), not .urlencoded()= so we can use json
app.use("/animals", animalsController);

app.listen(PORT, () => {
  console.log("celebrations happening on port", PORT);
});

// curl -X POST -H "Content-Type: application/json" -d '{"name":"Benjamin", "species": "canine", "breed": "airedale", "age": 2, "adopted": false, "personalityTraits": ["cute", "fat", "always hungry"]}' http://localhost:3003/animals

//update
//curl -X PUT -H "Content-Type: application/json" -d '{"adopted": true, "age": 3}' http://localhost:3003/animals/5e7c064805eee166bae7d651

//delete
//curl -X DELETE http://localhost:3003/animals/5e7c064805eee166bae7d651
