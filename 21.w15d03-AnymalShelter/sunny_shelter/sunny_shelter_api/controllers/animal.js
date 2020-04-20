const express = require("express");
const animals = express.Router();
const Animals = require("../models/Animal.js");

//index route
animals.get("/", (req, res) => {
  Animals.find({}, (err, foundAnimals) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundAnimals);
  });
});

//create route
animals.post("/", (req, res) => {
  Animals.create(req.body, (error, createdAnimals) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).json(createdAnimals); //  .json() will send proper headers in response so client knows it's json coming back
  });
});

//delete
animals.delete("/:id", (req, res) => {
  Animals.findByIdAndRemove(req.params.id, (err, deletedAnimals) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(deletedAnimals);
  });
});

//update
animals.put("/:id", (req, res) => {
  Animals.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedAnimals) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(updatedAnimals);
    }
  );
});

module.exports = animals;
