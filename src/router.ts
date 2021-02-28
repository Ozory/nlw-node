import { Router } from "express";
import { UserController } from "./controllers/UserControllers";
import { SurveyController } from "./controllers/SurveyController";


const router = Router();
const userController = new UserController();
const surveyController = new SurveyController();

// USERS
router.post("/users", userController.create);

// SURVEYS
router.post("/surveys", surveyController.create);
router.get("/surveys", surveyController.show);

export { router }