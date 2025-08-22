import Delivery from "../models/Delivery.js";

export const requestDelivery = async (req, res) => {
  try {
    const {
      author,
      location1,
      location2,
      time,
      price,
      distance,
      desc,
      status,
      courier,
      type
    } = req.body;
    const newDelivery = new Delivery({
      author,
      location1,
      location2,
      time,
      price,
      distance,
      desc,
      status,
      courier,
      type
    });
    await newDelivery.save();
    res.status(200).json({
      code: 200,
      success: true,
      message: "Delivery request created successfully",
    });
  } catch (error) {
    res.status(500).json({ code: 500, success: false, error: error.message });
  }
};

export const getRequestDelivery = async (req, res) => {
  try {
    const { author } = req.query;
    const deliverys = await Delivery.find({ author });
    deliverys.reverse();
    if (deliverys.length > 0) {
      res.status(200).json({
        code: 200,
        success: true,
        deliverys,
        message: "delivery requests found",
      });
    } else {
      res.status(404).json({
        code: 404,
        success: false,
        message: "No delivery requests found",
      });
    }
  } catch (error) {
    res.status(500).json({ code: 500, success: false, error: error.message });
  }
};

export const getAllRequestDelivery = async (req, res) => {
  try {
    const courier = { courier: [] };
    const deliverys = await Delivery.find(courier);
    deliverys.reverse();
    // console.log(deliverys);
    if (deliverys.length > 0) {
      res.status(200).json({
        code: 200,
        success: true,
        deliverys,
        message: "All delivery requests found",
      });
    } else {
      res.status(404).json({
        code: 404,
        success: false,
        message: "No delivery requests found",
      });
    }
  } catch (error) {
    res.status(500).json({ code: 500, success: false, error: error.message });
  }
};
