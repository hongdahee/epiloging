const express = require("express");
const memoController = require("../controllers/memo-controller");

const router = express.Router();

router.get("/:storageId/:contentsId", memoController.getMemos);

router.post("/:storageId/:contentsId", memoController.postMemo);

router.patch("/:storageId/:contentsId/:memoId", memoController.updateMemo);

router.delete("/:storageId/:contentsId/:memoId", memoController.deleteMemo);

module.exports = router;
