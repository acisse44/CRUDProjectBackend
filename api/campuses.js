// Will set up a route handler for the GET request

const express = require("express");
const router = express.Router();
const { Campus } = require("../db/models");

router.get("/", async (req, res, next) => {
  try {
    const allCampuses = await Campus.findAll(); //fetching all campuses from db

    allCampuses
      ? res.status(200).json(allCampuses)
      : res.status(404).send("Campus List Not Found");
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const campusID = req.params.id;
    console.log(campusID);
    const campus = await Campus.findByPk(campusID);

    if (!campus) {
      res.status(400).send("Campus not found");
    } else {
      await campus.destroy();
      res.status(200).send("Campus deleted successfully");
    }
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const campusId = req.params.id;

    const campus = await Campus.findByPk(campusId);

    campus
      ? res.status(200).json(campus)
      : res.status(404).send("Campus Not Found");
  } catch (error) {
    next(error);
  }
});


// ERROR: duplicate keys can be made
router.post("/", async (req, res, next) => {
  try {
    const results = Campus.create(req.body);
    if (!results) {
      res.status(400).send("Campus not found");
    } else {
      res.status(200).send("Campus added successfully");
    }
  } catch (error) {
    next(error);
  }
});

router.put("/", async (req, res, next) => {
  try {
    const results = Campus.update(req.body);
    if (!results) {
      res.status(400).send("Campus not found");
    } else {
      res.status(200).send("Campus added successfully");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
