const express = require("express");
const app = express();
const userRouter = require("./routers/userRouter");
const blogRouter = require("./routers/blogRouter");
const utilRouter = require("./routers/util");
const cors = require("cors");

const port = 5000;

//middleware
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use(express.json());

// middleware

app.use("/user", userRouter);

app.use("/blog", blogRouter);
app.use("/util", utilRouter);

app.use(express.static("./uploads"));

app.listen(port, () => {
  console.log("server started on port no 5000");
});
