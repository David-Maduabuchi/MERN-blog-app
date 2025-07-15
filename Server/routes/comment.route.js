import express from "express";
const router = express.Router();

// define test get request and return a status 200 and user route is active
router.get("/test", (req, res) => {
    res.status(200).json({ message: "User route is active" });
});



export default router;