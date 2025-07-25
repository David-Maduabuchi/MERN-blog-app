import postModel from "../models/post.model.js";
import Post from "../models/post.model.js";

export const getPosts = async (req, res) => {
    const posts = await Post.findd();
    res.status(200).json(posts);
}

export const getPost = async (req, res) => {
    const post = await Post.findOne({ slug: req.params.slug });
    res.status(200).json(post);
}


export const createPost = async (req, res) => {
    const newPost = new Post(req.body)
    const post = await newPost.save()
    res.status(200).json(post)

}


export const deletePost = async (req, res) => {
    // use findbyIdAndDelete to delete the post by slug
    const { slug } = req.params
    await Post.findByIdAndDelete({ _id: req.params.id })
    res.status(200).json({ message: "Post deleted successfully" })

}