const express = require("express");
const router = express.Router();

const { createUser, getAllUser, getUserById, updateUserById, deleteUserById } = require("../controllers/user.controller"); // TỰ TẠO: import từ controller

router.post("/", createUser);
router.get("/", getAllUser);
router.get("/:id", getUserById);
router.put("/:id", updateUserById);
router.delete("/:id", deleteUserById);

module.exports = router;