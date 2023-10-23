const userMethods = {};
const User = require("../models/user.model");

async function getUser(param) {
  try {
    return User.findOne(param);
  } catch (error) {
    return false;
  }
}

userMethods.login = (req, res) => {
  const { email, password } = req.body;
  const user = getUser({ email });
  if (user) {
  } else {
    return res.status(400).json({
      status: false,
      message: "Invalid email or password",
    });
  }
};

userMethods.register = (req, res) => {};

userMethods.authenticate = (req, res) => {};

module.exports = userMethods;
