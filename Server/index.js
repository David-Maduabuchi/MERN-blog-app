import express from "express";
import userRouter from "./routes/user.routes.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import webHookRouter from "./routes/webhook.route.js";
import connectDB from "./lib/connectDB.js";


const app = express()

// middleware to parse JSON requests
app.use(express.json());

connectDB();
// here we are importing different routers for users, posts, and webhook.route.jss
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);
app.use("/webhooks", webHookRouter)

// create an error handler middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500)

  res.json({
    message: err.message || "Internal Server Error",
    status: err.status || 500,
    stack: err.stack || "No stack trace available"
  });
});

app.listen(5000, () => {
  console.log("Server is up!")
})