const { v4: uuid } = require("uuid");
let blogs = require("../model/blog");

exports.getBlogs = (req, res) => {
  res.send(blogs);
};
exports.createBlog = (req, res, next) => {
  const blog = req.body;
  blogs.push({ ...blog, blogId: uuid() });
  //console.log(blogs);
  res.send("Blog Added Successfully!");
};

exports.getSingleBlog = (req, res) => {
  const singleBlog = blogs.filter((blog) => blog.blogId === req.params.id);
  res.send(singleBlog);
};

exports.updateBlog = (req, res, next) => {
  const blog = blogs.find((blog) => blog.blogId === req.params.id);

  blog.title = req.body.title;
  blog.content = req.body.content;

  res.send("Blog Data Updated Successfully");
};
exports.deleteBlog = (req, res, next) => {
  blogs = blogs.filter((blog) => blog.blogId !== req.params.id);
  res.send("Blog deleted Successfully");
};
