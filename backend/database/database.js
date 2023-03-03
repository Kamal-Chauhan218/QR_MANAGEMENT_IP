const mongoose = require("mongoose");
const connectDatabse = () => {
  mongoose
    .connect(
      "mongodb+srv://kamalc218:kamal123@qrcode.4butqbl.mongodb.net/test",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then((con) => {
      console.log("Connected to MongoDB server");
    });
};
module.exports = connectDatabse;
