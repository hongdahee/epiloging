const HttpError = require("../models/http-error");

const { Calendar } = require("../models/calendar");

const getCalendar = async (req, res, next) => {
  const storageId = req.params.storageId;

  let calendar;

  try {
    calendar = await Calendar.find({ storageId });
  } catch (err) {
    const error = new HttpError(
      "캘린더를 불러오는 데 실패했습니다. 다시 시도해 주세요.",
      500
    );
    return next(error);
  }
  res.status(200).json(calendar);
};

exports.getCalendar = getCalendar;
