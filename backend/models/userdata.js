const mongoose = require("mongoose");
const userdataSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  _id: {
    type: Number,
    required: true,
  },
  CurrentAddress: {
    type: String,
    required: true,
  },
  City: {
    type: String,
    required: true,
  },
  classNames: {
    type: String,
    required: true,
  },
  Pincode: {
    type: Number,
    required: true,
  },
  Age: {
    type: Number,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  ContactNumber: {
    type: Number,
    required: true,
  },
  FatherName: {
    type: String,
    required: true,
  },
  MotherName: {
    type: String,
    required: true,
  },
  ResidentialAddress: {
    type: String,
    required: true,
  },
  FatherNumber: {
    type: String,
    required: true,
  },
  MotherNumber: {
    type: Number,
    required: true,
  },
  SchoolName: {
    type: String,
    required: true,
  },
  SchoolNumber: {
    type: Number,
    required: true,
  },
  SchoolAddress: {
    type: String,
    required: true,
  },
  PoliceStationName: {
    type: String,
    required: true,
  },
  PoliceStationAddress: {
    type: String,
    required: true,
  },
  BloodGroup: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("UserData", userdataSchema);
