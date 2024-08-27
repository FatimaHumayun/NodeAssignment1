const { v4: uuid } = require("uuid");

let users = require("../model/user");
exports.getUsers = (req, res, next) => {
  res.send(users);
};

exports.createUsers = (req, res, next) => {
  const user = req.body;
  users.push({ ...user, id: uuid() });
  res.send("User Added Successfully!");
};
exports.getSingleUser = (req, res, next) => {
  const singleUser = users.filter((user) => user.id === req.params.id);
  res.send(singleUser);
};

exports.deleteUser = (req, res, next) => {
  users = users.filter((user) => user.id !== req.params.id);
  res.send("User deleted Successfully");
};
exports.updateUser = (req, res, next) => {
  const user = users.find((user) => user.id === req.params.id);
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
  res.send("User Data Updated Successfully");
};
