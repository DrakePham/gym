const express = require("express");
const router = express.Router();
const workoutController = require("./controllers");

router.post("/workoutCreate", workoutController.createWorkout);

router.get("/workoutGet", workoutController.getWorkout);

router.delete("/:id",workoutController.deleteWorkout);

module.exports = router;
