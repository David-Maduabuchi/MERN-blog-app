import express from "express";
import { createPost, deletePost, getPost, getPosts } from "../controllers/post.controller.js";

const router = express.Router();

// define test get request and return a status 200 and user route is active
router.get("/test", (req, res) => {
    res.status(200).json({ message: "Post Route is active" });
});

//define a post route to get all the post and make it an async function
router.get("/", getPosts)

// define a post route to create a new post
router.post("/create", createPost);

// define a post route to get a post
router.post("/:slug", getPost)

//define a delete route to delete a post by id
router.delete("/:id", deletePost);



export default router;