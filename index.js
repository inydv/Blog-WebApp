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

// LOCAL FILES
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/posts", postRoute);

// LISTEN
app.listen("5000", () => {
  console.log("BACKEND IS RUNNING");
});
