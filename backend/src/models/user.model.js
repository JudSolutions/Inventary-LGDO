const { Schema, model } = require("mongoose");
const bcrypy = require("bcryptjs");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: String,
  create_at: {
    type: Date,
    default: new Date(),
  },
});

// password desde parametro
userSchema.methods.verifypassword = function (password) {
  return bcrypy.compareSync(password, this.password); //this es el documento actual que estamos trabajando en este
};

userSchema.methods.encryptpassword = async (password) => {
  // encryptar la contraseña
  const salt = await bcrypy.genSalt(10);
  return bcrypy.hash(password, salt);
};

module.exports = model("user", userSchema);
