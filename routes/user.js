import express from "express";
import { getUsers, createUser, cleanUp } from "../controllers/user.js";
import { createUserExercise } from "../controllers/exercise.js";

const router = express.Router();

router.get("/cleanup", cleanUp);
router.post("/:id/exercises", createUserExercise);
router.get("/", getUsers);
router.post("/", createUser);

export default router;
