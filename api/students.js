// Will set up a route handler for the GET request

const express = require("express");
const router = express.Router();
const { studentModel } = require("../db/models");

router.get("/", async (req, res, next) => { 
  try {
    const allStudents = await studentModel.findAll(); //fetching all students from database

    allStudents
      ? res.status(200).json(allStudents) 
      : res.status(404).send("Student List Not Found"); 
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => { 
    try {
      const studentId = req.params.id; //retreive the student id first
      const student = await studentModel.findByPk(studentId); //fetching a single student from database
      student
        ? res.status(200).json(student)
        : res.status(404).send("Student Not Found");
    } catch (error) {
      next(error);
    }
  });

module.exports = router;