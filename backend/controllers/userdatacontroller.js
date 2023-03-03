const UserData = require("../models/userdata.js");
exports.getUserData = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, messsage: "Successfully retrieved userdata" });
};
// exports.newUserData = async (req, res, next) => {
//   const data = await UserData.create(req.body);
//   res.status(201).json({
//     success: true,
//     data,
//   });
// };
exports.getAllData = async (req, res, next) => {
  const data = await UserData.findById(req.params.id);
  if (!data) {
    res.status(400);
    res.json({
      success: false,
      data,
    });
    res.end();
    return;
  }
  res.status(201).json({ success: true, data });
};
