const HttpError = require("../models/http-error");
require("dotenv").config();

const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { nanoid } = require("nanoid");

const User = require("../models/user");
const { Storage } = require("../models/storage");
const { Calendar } = require("../models/calendar");

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, "-password");
  } catch (err) {
    const error = new HttpError(
      "전체 유저 정보를 가져오는 데 실패했습니다. 다시 시도해 주세요.",
      500
    );
    return next(error);
  }
  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

const getUser = async (req, res, next) => {
  const userId = req.params.userId;
  let user;
  try {
    user = await User.findById(userId, "-password");
  } catch (err) {
    const error = new HttpError(
      "유저 정보를 가져오는 데 실패했습니다. 다시 시도해 주세요.",
      500
    );
    return next(error);
  }
  res.json(user);
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("유효하지 않은 입력 값입니다. 데이터를 확인하세요.", 422)
    );
  }
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "가입에 실패했습니다. 다시 시도해 주세요.",
      500
    );
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      "이미 존재하는 계정입니다. 로그인 해 주세요.",
      422
    );
    return next(error);
  } // 이미 존재하는 계정이 있는지 확인

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError(
      "사용자를 생성할 수 없습니다. 다시 시도해 주세요.",
      500
    );
    return next(error);
  }

  const createdUser = new User({
    nickname: "guest",
    email,
    password: hashedPassword,
    image:
      "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fs1we4%2FbtrSCKXzNhk%2F2ybKVkNTFhLPAC74kzG9o1%2Fimg.jpg",
    intro: "반갑습니다!",
    storageId: nanoid(),
  });

  const newStorage = new Storage({
    storageId: createdUser.storageId,
  });

  let createdStorage = false;
  try {
    createdStorage = await newStorage.save();
  } catch (err) {
    const error = new HttpError(
      "보관함 생성에 실패했습니다. 다시 시도해 주세요.",
      500
    );
    return next(error);
  } // 보관함 생성

  const newCalendar = new Calendar({
    storageId: createdUser.storageId,
  });

  let createdCalendar = false;
  try {
    createdCalendar = await newCalendar.save();
  } catch (err) {
    const error = new HttpError(
      "캘린더 생성에 실패했습니다. 다시 시도해 주세요.",
      500
    );
    return next(error);
  } // 캘린더 생성

  if (createdStorage && createdCalendar) {
    try {
      await createdUser.save();
    } catch (err) {
      const error = new HttpError(
        "가입에 실패했습니다. 다시 시도해 주세요.",
        500
      );
      return next(error);
    } // 보관함, 캘린더 생성 후 db에 유저 생성
  }

  let token;
  try {
    token = jwt.sign(
      { userId: createdUser.id, email: createdUser.email },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
  } catch (err) {
    const error = new HttpError(
      "가입에 실패했습니다. 다시 시도해 주세요.",
      500
    );
    return next(error);
  } // 토큰 생성

  res
    .status(201)
    .json({ userId: createdUser.id, email: createdUser.email, token: token });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "로그인에 실패했습니다. 다시 시도해 주세요.",
      500
    );
    return next(error);
  } // db에 일치하는 이메일이 있는지 확인

  if (!existingUser) {
    const error = new HttpError(
      "이메일 또는 비밀번호가 일치하지 않습니다.",
      401
    );
    return next(error);
  } // 유저가 존재하지 않을 경우

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError(
      "이메일 또는 비밀번호가 일치하지 않습니다.",
      500
    );
    return next(error);
  } // 비밀번호가 일치하는지 비교

  if (!isValidPassword) {
    const error = new HttpError(
      "이메일 또는 비밀번호가 일치하지 않습니다.",
      401
    );
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: existingUser.id, email: existingUser.email },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
  } catch (err) {
    const error = new HttpError(
      "로그인에 실패했습니다. 다시 시도해 주세요.",
      500
    );
    return next(error);
  } // 토큰 생성

  res.json({
    message: "로그인에 성공했습니다!",
    user: {
      userId: existingUser.id,
      storageId: existingUser.storageId,
      email: existingUser.email,
      token: token,
    },
  });
};

const updateUser = async (req, res, next) => {
  const userId = req.params.userId;
  const { nickname, image, intro } = req.body;

  let updatedUser;
  try {
    updatedUser = await User.findByIdAndUpdate(userId, {
      $set: {
        nickname,
        image,
        intro,
      },
    });
  } catch (err) {
    const error = new HttpError(
      "유저 정보 업데이트에 실패했습니다. 다시 시도해 주세요.",
      500
    );
    return next(error);
  } // 유저 정보 수정
  res.status(201).json(updatedUser);
};

const deleteUser = async (req, res, next) => {
  const userId = req.params.userId;

  try {
    await User.findByIdAndRemove(userId);
  } catch (err) {
    const error = new HttpError(
      "유저 탈퇴에 실패했습니다. 다시 시도해 주세요.",
      500
    );
    return next(error);
  } // 유저 탈퇴

  res.status(200).json({
    message: "회원 탈퇴가 완료됐습니다.",
  });
};

exports.getUsers = getUsers;
exports.getUser = getUser;
exports.signup = signup;
exports.login = login;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
