import express from "express";
import {
  getUsers,
  createUser,
  cleanUp,
  getUserLogs,
} from "../controllers/user.js";
import { createUserExercise } from "../controllers/exercise.js";

const router = express.Router();

router.get("/cleanup", cleanUp);
router.get("/:id/logs", getUserLogs);
router.post("/:id/exercises", createUserExercise);
router.get("/", getUsers);
router.post("/", createUser);

export default router;
