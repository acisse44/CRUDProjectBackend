// Will set up a route handler for the GET request

const express = require("express");
const router = express.Router();
const { Student } = require("../db/models");

router.get("/", async (req, res, next) => { 
  try {
    const allStudents = await Student.findAll(); //fetching all students from database

    allStudents
      ? res.status(200).json(allStudents) 
      : res.status(404).send("Student List Not Found"); 
  } catch (error) {
    next(error);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    const studentID = req.params.id;
    console.log(studentID);
    const student = await Student.findByPk(studentID);

    if (!student) {
      res.status(404).send("Student not found");
    } else {
      await student.destroy();
      res.status(200).send("Student deleted successfully");
    }
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => { 
  try {
    const studentId = req.params.id; //retreive the student id first
    const student = await Student.findByPk(studentId); //fetching a single student from database
    student
      ? res.status(200).json(student)
      : res.status(404).send("Student Not Found");
  } catch (error) {
    next(error);
  }
});

// ERROR: duplicate keys can be made
router.post("/", async (req, res, next) => {
  try {
    const results = Student.create(req.body);
    if (!results) {
      res.status(400).send("Failed to create Student");
    } else {
      res.status(200).send("Student added successfully");
    }
  } catch (error) {
    next(error);
  }
});

router.put("/", async (req, res, next) => {
  try {
    const studentId = req.body.id;

    const student = await Student.findByPk(studentId);

    if (!student) {
      res.status(400).send("Failed to update Student");
    } else {
      await student.update(req.body);
      res.status(200).send("Student updated successfully");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;