const mongoose = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  nickname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 8 },
  image: { type: String, required: true },
  intro: { type: String, required: true },
  storageId: { type: String, required: true, unique: true },
});

userSchema.plugin(uniqueValidator); // 이미 존재하는 이메일인지 검증

module.exports = mongoose.model("User", userSchema);
