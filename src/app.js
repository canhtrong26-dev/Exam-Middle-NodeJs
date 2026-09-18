const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;


app.use((req, res, next) => {
    console.log("Time:", new Date().toLocaleString());
    next();
});


app.use((req, res, next) => {
    console.log("URL:", req.url);
    next();
});


app.use(express.static(path.join(__dirname, "../public")));



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});


app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});