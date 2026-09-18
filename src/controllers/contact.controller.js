const Contact = require("../models/contact.model");

const createContact = async(req, res) => {
    try {
        const contact = await Contact.create(req.body);
        res.status(201).json(contact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const getAllContact = async(req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getContactById = async(req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) return res.status(404).json({ message: "Không tìm thấy contact" });
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const updateContactById = async(req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!contact) return res.status(404).json({ message: "Không tìm thấy contact" });
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const deleteContactById = async(req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) return res.status(404).json({ message: "Không tìm thấy contact" });
        res.status(200).json({ message: "Xoá thành công" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createContact, getAllContact, getContactById, updateContactById, deleteContactById };