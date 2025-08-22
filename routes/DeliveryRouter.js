import express from "express";
import { requestDelivery,getRequestDelivery,getAllRequestDelivery } from "../controllers/deliveryController.js";

const deliveryRouter = express.Router();

deliveryRouter.get("/api/get/delivery", getRequestDelivery);
deliveryRouter.post("/api/delivery/request", requestDelivery);
deliveryRouter.get("/api/get/all/deliverys", getAllRequestDelivery);

export default deliveryRouter;
