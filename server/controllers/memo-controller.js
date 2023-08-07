const HttpError = require("../models/http-error");

const { Storage } = require("../models/storage");

const getMemos = async (req, res, next) => {
  const storageId = req.params.storageId;
  const contentsId = req.params.contentsId;

  let memos;

  try {
    memos = await Storage.find(
      { storageId: storageId },
      { contents: { $elemMatch: { contentsId } } }
    );
  } catch (err) {
    const error = new HttpError(
      "메모를 불러오는 데 실패했습니다. 다시 시도해 주세요.",
      500
    );
    return next(error);
  }
  res.status(200).json(memos);
};

const postMemo = async (req, res, next) => {
  const { memoId, content, page, timeline } = req.body;
  const storageId = req.params.storageId;
  const contentsId = req.params.contentsId;

  const newMemo = {
    memoId,
    content,
    page,
    timeline,
  };
  let postedMemo;
  try {
    postedMemo = await Storage.updateOne(
      { storageId: storageId, contents: { $elemMatch: { contentsId } } },
      { $push: { "contents.$.memo": newMemo } }
    );
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      "메모 작성에 실패했습니다. 다시 시도해 주세요.",
      500
    );
    return next(error);
  } // 메모 작성

  res.status(201).json(postedMemo);
};

const updateMemo = async (req, res, next) => {
  const { content, page, timeline } = req.body;
  const storageId = req.params.storageId;
  const contentsId = req.params.contentsId;
  const memoId = req.params.memoId;

  let updatedMemo;
  try {
    updatedMemo = await Storage.updateOne(
      {
        storageId: storageId,
        contents: { $elemMatch: { contentsId } },
      },
      {
        $set: {
          "contents.$.memo.$[memoEl].content": content,
          "contents.$.memo.$[memoEl].page": page,
          "contents.$.memo.$[memoEl].timeline": timeline,
        },
      },
      { arrayFilters: [{ "memoEl.memoId": memoId }] }
    );
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      "메모 수정에 실패했습니다. 다시 시도해 주세요.",
      500
    );
    return next(error);
  } // 메모 수정

  res.status(201).json(updatedMemo);
};

const deleteMemo = async (req, res, next) => {
  const storageId = req.params.storageId;
  const contentsId = req.params.contentsId;
  const memoId = req.params.memoId;

  let updatedComment;
  try {
    updatedComment = await Storage.updateOne(
      {
        storageId: storageId,
      },
      {
        $pull: {
          "contents.$[el].memo": {
            memoId,
          },
        },
      },
      { arrayFilters: [{ "el.contentsId": contentsId }] }
    );
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      "메모 수정에 실패했습니다. 다시 시도해 주세요.",
      500
    );
    return next(error);
  } // 메모 수정

  res.status(201).json(updatedComment);
};

exports.getMemos = getMemos;
exports.postMemo = postMemo;
exports.updateMemo = updateMemo;
exports.deleteMemo = deleteMemo;
