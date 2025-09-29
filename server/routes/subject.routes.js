import express from "express";
import { addSubject, deleteSubject, getSubjects } from "../controllers/subjects.controller.js";
const subjectRouter = express.Router();

// !Get Subject
subjectRouter.get("/", getSubjects);
// !Post Subject

subjectRouter.post("/add", addSubject);

subjectRouter.post("/delete", deleteSubject);

export default subjectRouter;
