// EXPRESS
const express = require("express");
const app = express();

app.use(express.json());

// DOTENV
const dotenv = require("dotenv");
dotenv.config();

// MONGOOSE
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(console.log("connected to mongoDB"))
  .catch((err) => console.log(err));

// PATH
const path = require("path");
app.use("/images", express.static(path.join(__dirname, "/images")));

// MULTER
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  return res.status(200).json("File has been uploaded");
});

// LOCAL FILES
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const CategoryRoute = require("./routes/categories");

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", CategoryRoute);

// LISTEN
app.listen("5000", () => {
  console.log("BACKEND IS RUNNING");
});
