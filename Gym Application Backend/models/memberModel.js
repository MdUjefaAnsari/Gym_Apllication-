const mongoose = require("mongoose");

const MemberSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    trainer: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: true,
    }
    ,
    state: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    }
  },
  { timestamps: true }
);

const membershipModel = mongoose.model("Membership", MemberSchema);
module.exports = membershipModel;
