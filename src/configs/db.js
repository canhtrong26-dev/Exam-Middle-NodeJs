const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Exam_Middle_NodeJs");
        console.log("Kết nối MongoDB thành công");
    } catch (error) {
        console.log("Kết nối MongoDB thất bại:", error);
    }
};

module.exports = connectDB;