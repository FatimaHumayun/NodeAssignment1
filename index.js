const path = require("path");

const express = require("express");

const userRoutes = require("./routes/user");
const blogRoutes = require("./routes/blog");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use("/users", blogRoutes);
app.use("/", userRoutes);

app.get("/", (req, res, next) => {
  res.send("Hello from Express");
});

app.all("*", (req, res, next) => {
  res.status(404).send("Route doesn't exist");
});

app.listen(3000, () => console.log("Server is listening on local host"));
