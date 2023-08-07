const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  date: { type: String, required: true },
  img: { type: String, required: true },
  id: { type: Number },
  isbn: { type: Number },
});

const calendarSchema = new Schema({
  storageId: { type: String, required: true },
  events: { type: [eventSchema], default: [] },
});

exports.Calendar = mongoose.model("Calendar", calendarSchema);
