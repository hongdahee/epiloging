const mongoose = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const memoSchema = new Schema(
  {
    memoId: { type: Number, required: true },
    content: { type: String, required: true },
    page: { type: Number },
    timeline: { type: Number },
  },
  { timestamps: true }
);

const contentSchema = new Schema({
  title: { type: String, required: true },
  startDate: { type: String, required: true },
  finishDate: { type: String },
  completedContents: { type: Boolean, required: true },
  img: { type: String, required: true },
  isbn: { type: Number },
  id: { type: Number },
  contentsId: { type: Number, required: true },
  mainContents: { type: Boolean, required: true },
  memo: { type: [memoSchema], default: [] },
});

const storageSchema = new Schema({
  storageId: { type: String, required: true, unique: true },
  contents: { type: [contentSchema], default: [] },
});

storageSchema.plugin(uniqueValidator);

exports.Storage = mongoose.model("Storage", storageSchema);
