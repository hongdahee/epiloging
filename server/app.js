require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const url = process.env.MONGODB_URL;

const userRoutes = require("./routes/user-routes");
const storageRoutes = require("./routes/storage-routes");
const memoRoutes = require("./routes/memo-routes");
const calendarRoutes = require("./routes/calendar-routes");

const app = express();

app.use(bodyParser.json());

app.use("/api/user", userRoutes);
app.use("/api/storage", storageRoutes);
app.use("/api/memo", memoRoutes);
app.use("/api/calendar", calendarRoutes);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

mongoose
  .connect(url)
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
