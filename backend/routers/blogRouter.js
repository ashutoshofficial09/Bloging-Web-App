const express = require("express");
const router = express.Router();
const Model = require("../models/blogModel");

router.post("/add", (req, res) => {
  console.log(req.body);

  new Model(req.body)
    .save()
    .then((data) => {
      res.status(200).json({ message: "success" });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/getall", (req, res) => {
  console.log(req.body);

  Model.find({})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/getbyid/:id", (req, res) => {
  // promise method
  Model.findById(req.params.id)
    .populate("author")
    .then((data) => {
      console.log("fetched Blog by id");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getbyid/:author", (req, res) => {
  // promise method
  Model.find({ author: req.params.id })
    .populate("author")
    .then((data) => {
      console.log("fetched Blog by id:author");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});
module.exports = router;
