const blogs = require("../model/blog");

const accessMiddleware = (req, res, next) => {
  const userIdFromHeader = req.header("userId");
  const blogId = req.params.id;

  const blog = blogs.find((b) => b.blogId === blogId);

  if (!blog) {
    return res.status(404).send("Blog not found");
  }

  if (blog.userId !== userIdFromHeader) {
    return res.status(403).send("Access denied");
  }

  next();
};

module.exports = accessMiddleware;
