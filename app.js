const express = require("express");
const userRouter = require("./Router/userRouter");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());
connectDB();

app.use("/api", userRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
