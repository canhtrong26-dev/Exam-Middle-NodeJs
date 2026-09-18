const express = require("express");
const path = require("path");
const connectDB = require("./configs/db");
const userRoute = require("./routes/user.route");
const contactRoute = require("./routes/contact.route");

const app = express();
const PORT = 3000;

connectDB();


app.use(express.json());


app.use((req, res, next) => {
    console.log("Time:", new Date().toLocaleString());
    next();
});


app.use((req, res, next) => {
    console.log("URL:", req.url);
    next();
});


app.use(express.static(path.join(__dirname, "../public")));


app.use("/api/users", userRoute);
app.use("/api/contacts", contactRoute);


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});