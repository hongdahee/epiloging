const { Calendar } = require("../models/calendar");
const HttpError = require("../models/http-error");

const { Storage } = require("../models/storage");

const getStorage = async (req, res, next) => {
  let storage;
  try {
    storage = await Storage.find({ storageId: req.params.storageId });
  } catch (err) {
    const error = new HttpError(
      "보관함을 가져오는 데 실패했습니다. 다시 시도해 주세요.",
      500
    );
    return next(error);
  }
  res.json({ storage });
};

const storeContents = async (req, res, next) => {
  const {
    title,
    startDate,
    finishDate,
    completedContents,
    img,
    isbn,
    id,
    contentsId,
    mainContents,
  } = req.body;
  const storageId = req.params.storageId;

  const newContents = {
    title,
    startDate,
    finishDate,
    completedContents,
    img,
    isbn,
    id,
    contentsId,
    mainContents,
  };

  try {
    await Storage.findOneAndUpdate(
      {
        storageId,
      },
      {
        $push: {
          contents: newContents,
        },
      }
    );
  } catch (err) {
    const error = new HttpError(
      "컨텐츠 저장에 실패했습니다. 다시 시도해 주세요.",
      500
    );
    return next(error);
  } // 컨텐츠 저장

  if (completedContents === true) {
    try {
      await Calendar.findOneAndUpdate(
        { storageId },
        {
          $push: {
            events: {
              date: finishDate,
              img,
              id,
              isbn,
            },
          },
        }
      );
    } catch (err) {
      const error = new HttpError(
        "캘린더 이벤트 생성에 실패했습니다. 다시 시도해 주세요.",
        500
      );
      return next(error);
    }
  } // 감상 완료했을 때만 캘린더 이벤트 생성

  res.status(201).json(newContents);
};

const updateContents = async (req, res, next) => {
  const storageId = req.params.storageId;
  const contentsId = req.params.contentsId;
  const {
    startDate,
    finishDate,
    img,
    mainContents,
    completedContents,
    id,
    isbn,
  } = req.body;

  try {
    await Storage.findOneAndUpdate(
      {
        storageId,
      },
      {
        $set: {
          "contents.$[el].startDate": startDate,
          "contents.$[el].finishDate": finishDate,
          "contents.$[el].img": img,
          "contents.$[el].mainContents": mainContents,
          "contents.$[el].completedContents": completedContents,
        },
      },
      { arrayFilters: [{ "el.contentsId": contentsId }] }
    );
  } catch (err) {
    const error = new HttpError(
      "컨텐츠 업데이트에 실패했습니다. 다시 시도해 주세요.",
      500
    );
    return next(error);
  } // 컨텐츠 내용 수정
  let updatedContents;

  try {
    updatedContents = await Storage.find({ storageId });
  } catch (err) {
    const error = new HttpError(
      "업데이트된 컨텐츠 불러오기에 실패했습니다. 다시 시도해 주세요.",
      500
    );
    return next(error);
  } // 업데이트된 보관함 다시 불러오기

  if (completedContents === true) {
    try {
      await Calendar.findOneAndUpdate(
        { storageId },
        {
          $push: {
            events: {
              date: finishDate,
              img,
              id,
              isbn,
            },
          },
        }
      );
    } catch (err) {
      const error = new HttpError(
        "캘린더 이벤트 생성에 실패했습니다. 다시 시도해 주세요.",
        500
      );
      return next(error);
    }
  } // 감상 완료했을 때만 캘린더 이벤트 생성
  else {
    try {
      await Calendar.updateOne(
        { storageId },
        {
          $pull: {
            events: {
              date: finishDate,
              id,
              isbn,
            },
          },
        }
      );
    } catch (err) {
      const error = new HttpError(
        "캘린더 이벤트 삭제에 실패했습니다. 다시 시도해 주세요.",
        500
      );
      return next(error);
    }
  }

  res.status(201).json(updatedContents);
};

const deleteContents = async (req, res, next) => {
  const storageId = req.params.storageId;
  const contentsId = req.params.contentsId;

  try {
    await Storage.updateOne(
      {
        storageId,
      },
      { $pull: { contents: { contentsId } } }
    );
  } catch (err) {
    const error = new HttpError(
      "컨텐츠 삭제에 실패했습니다. 다시 시도해 주세요.",
      500
    );
    return next(error);
  } // 컨텐츠 내용 수정
  let updatedContents;

  try {
    updatedContents = await Storage.find({ storageId });
  } catch (err) {
    const error = new HttpError(
      "업데이트된 컨텐츠 불러오기에 실패했습니다. 다시 시도해 주세요.",
      500
    );
    return next(error);
  } // 업데이트된 보관함 다시 불러오기

  res.status(201).json(updatedContents);
};

exports.getStorage = getStorage;
exports.storeContents = storeContents;
exports.updateContents = updateContents;
exports.deleteContents = deleteContents;
