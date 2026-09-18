const express = require("express");
const router = express.Router();

const { createContact, getAllContact, getContactById, updateContactById, deleteContactById } = require("../controllers/contact.controller"); // TỰ TẠO

router.post("/", createContact);
router.get("/", getAllContact);
router.get("/:id", getContactById);
router.put("/:id", updateContactById);
router.delete("/:id", deleteContactById);

module.exports = router;