const express = require("express");
const app = express();
const userRouter = require("./routers/userRouter");
const blogRouter = require("./routers/blogRouter");
const cors = require("cors");

const port = 5000;

//middleware
app.use(
  cors({
    origin: ["http://localhost:3000"]})
);
app.use(express.json());

// middleware
app.use("/user", userRouter);

app.use("/blog",blogRouter);


app.listen(port, () => {
  console.log("server started on port no 5000");
});
