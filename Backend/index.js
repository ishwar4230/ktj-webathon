const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require(`body-parser`);
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://pratyush:uknowmebro@ac-r7mlzk7-shard-00-00.vd0egjp.mongodb.net:27017,ac-r7mlzk7-shard-00-01.vd0egjp.mongodb.net:27017,ac-r7mlzk7-shard-00-02.vd0egjp.mongodb.net:27017/?ssl=true&replicaSet=atlas-13wv38-shard-0&authSource=admin&retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => {
  console.log("Connected to database!");
}).catch(() => {
  console.log("Connection failed!");
});


const cors = require("cors");

const userRoutes = require("./user/user.route");
const requestRoutes = require("./request/request.route");
const postRoutes = require("./post/post.route");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use("/user", userRoutes);
app.use("/request", requestRoutes);
app.use("/post", postRoutes);
// app.use("/", postRoutes);

// user/create-user
// user/all-users

// post/create-post
// post/all-posts  // to get all the posts
// post/update-post  // to add a request or to change the status of the post
// post/myposts  to get the post created by a particular user with the id

// request/create-request
// request/all-request // to get all the request for a particular post
// request/update-request  // to change the status of the request here, may need to change the status of the post also if the max no. of participent limit reaches so made the status of the post to closed and also remove all the request form the request array of the post and also all the request in that post which are pending in that post
// post to completed

app.listen(PORT, function (error) {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});

// installation
// npm i mongoose body-parser express

app.use((req, res, next) => {
  res.status(404).send("Error 404!");
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
