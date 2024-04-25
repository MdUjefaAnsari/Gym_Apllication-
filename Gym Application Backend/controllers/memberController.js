const membershipModel = require("../models/memberModel");
const userModel = require(".././models/userModel");

const createMember = async (req, res) => {
  const { email, duration, pincode, trainer, city, state } = req.body;
  try {
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      const result = await membershipModel.create({
        email,
        duration,
        pincode,
        trainer,
        city,
        state,
      });
      res.send(result)
      res
        .status(201)
        .json({ message: "Membership has been taken", result: result });
    } else {
      res
        .status(404)
        .json({ message: "User not found please enter correct email" });
    }
  } catch (error) {
    res.send(error);
    res.status(500).json({ message: "something went wrong!!" });
  }
};


module.exports = { createMember };
