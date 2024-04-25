const express = require("express");
const contactModel = require("../models/contactusModel");
const { model } = require("mongoose");

const contactUs = async (req, res) => {
  const { name, email, number, branch, foodPreference, fitnessGoal } = req.body;
  try {
    const result = await contactModel.create({
      name,
      email,
      number,
      branch,
      foodPreference,
      fitnessGoal,
    });
   return res.status(201).json({ message: "Membership has been taken", result: result })
  } catch (error) {
    res.send(error);
    res.status(500).json({ message: "something went wrong!!" });
  }
};

module.exports = contactUs;
