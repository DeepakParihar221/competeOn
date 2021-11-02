const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/users");
const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);  

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));



// import bodyParser  from 'body-parser';
// import express from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import passport from 'passport';

// import users from "./routes/users.js"
// // import userRoutes from './routes/user.js';
// const app = express();

// // app.use('/user', userRoutes);

// app.use(
//     bodyParser.urlencoded({
//       extended: false
//     })
//   );
//   app.use(bodyParser.json());

// app.use(cors()) ;


// const CONNECTION_URL = 'mongodb+srv://CompeteOn:123123123@cluster0.qf7lw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// const PORT = process.env.PORT || 5000;

// mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
//     .then(() => app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`)))
//     .catch((err) => console.log(err.message));

// // mongoose.set('useFindAndModify', false);