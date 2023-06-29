// Will set up a route handler for the GET request 

const express = require("express");
const router = express.Router();
const { campusModel } = require("../db/models");

router.get("/", async (req, res, next) => {
  try {
    const allCampuses = await campusModel.findAll(); //fetching all campuses from db

    allCampuses
      ? res.status(200).json(allCampuses) 
      : res.status(404).send("Campus List Not Found"); 
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
    try {
      const campusId = req.params.id;
  
      const campus = await campusModel.findByPk(campusId);
  
      campus
        ? res.status(200).json(campus)
        : res.status(404).send("Campus Not Found");
    } catch (error) {
      next(error);
    }
  });

module.exports = router;