const app = require("./app");
const connectDatabse = require("./database/database");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3001;
connectDatabse();

app.listen(PORT, () => {
  console.log("Server Started");
});
