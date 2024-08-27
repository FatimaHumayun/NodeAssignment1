const express = require("express");

const router = express.Router();

const blogController = require("../controllers/blog");

const accessMiddleware = require("../middleware/accessMiddleware");

router.get("/blogs", blogController.getBlogs);
router.post("/blogs", blogController.createBlog);
router.get("/blogs/:id", blogController.getSingleBlog);
router.put("/blogs/:id", accessMiddleware, blogController.updateBlog);
router.delete("/blogs/:id", accessMiddleware, blogController.deleteBlog);
module.exports = router;
