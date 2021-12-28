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
  module.exports = router;