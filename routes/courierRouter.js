import express from "express";
import { handleCourierLogin } from "../controllers/courierController.js";

const courierRouter = express.Router();

courierRouter.post("/api/courier/login", handleCourierLogin);

export default courierRouter;
