import hash from "bcrypt";
import Courier from "../models/Courier.js";

export const handleCourierLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        code: 400,
        success: false,
        message: "Email and password are required",
      });
    }

    const courier = await Courier.findOne({ email });
    if (!courier) {
      return res.status(404).json({
        code: 404,
        success: false,
        message: "Courier not found",
      });
    }
    const isPasswordValid = await hash.compare(password, courier.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        code: 401,
        success: false,
        message: "Invalid password",
      });
    }
    return res.status(200).json({
      code: 200,
      success: true,
      courier: {
        _id: courier._id,
        name: courier.name,
        photo: courier.photo,
        email: courier.email,
        whatsapp: courier.whatsapp,
      },
      message: "Courier login successful",
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
