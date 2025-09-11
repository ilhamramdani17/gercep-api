import express from "express";
import { handleCourierLogin,handleCourierStatistik } from "../controllers/courierController.js";

const courierRouter = express.Router();

courierRouter.post("/courier/login", handleCourierLogin);
courierRouter.get("/get/courier/statistik", handleCourierStatistik);

export default courierRouter;
