const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const port = 3000;

// using Middleware for Data-optimization
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// opening the connection to mongoDB

mongoose
  .connect("mongodb://localhost:27017/userdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Users Mongo DB"))
  .catch((err) => console.log("Error connecting to MongoDB", err));

// create a new Schema in Mongoose for mongoDB
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

// Creating a route for the home-site

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// creating a route to save a user in db
app.post("/add-user", (req, res) => {
  const { name, email } = req.body;
  const newUser = new User({ name, email });
  newUser
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log("Error inserting data: ", err.message);
      res.status(500).send("Error inserting data");
    });
});

// creating a route to call user data from db
app.get("/users", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => {
      console.log("Error fetching user data: ", err.message);
      res.status(500).send("Error fetching data");
    });
});

// now whats left is, we have to start the server
app.listen(port, () => {
  console.log(`Server is running on localhost port: ${port}`);
});
