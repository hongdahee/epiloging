const express = require("express");
const { check } = require("express-validator");

const storageController = require("../controllers/storage-controller");

const router = express.Router();

router.get("/:storageId", storageController.getStorage);

router.get("/:storageId/:contentsId", storageController.getContents);

router.post(
  "/:storageId",
  //   [
  //     check("email").normalizeEmail().isEmail(),
  //     check("password").isLength({ min: 8 }),
  //   ],
  storageController.storeContents
);

router.patch("/:storageId/:contentsId", storageController.updateContents);

router.delete("/:storageId/:contentsId", storageController.deleteContents);

module.exports = router;
