import express from "express";
import { requestDelivery,getRequestDelivery,getAllRequestDelivery } from "../controllers/deliveryController.js";

const deliveryRouter = express.Router();

deliveryRouter.get("/get/delivery", getRequestDelivery);
deliveryRouter.post("/delivery/request", requestDelivery);
deliveryRouter.get("/get/all/deliverys", getAllRequestDelivery);

export default deliveryRouter;
