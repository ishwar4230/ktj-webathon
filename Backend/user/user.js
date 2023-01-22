let mongoose = require("mongoose")
// user Model
const userSchema = require("./user.model");


// user/create-user
// user/all-users

// CREATE user
exports.createUserMiddleware = async (req, res, next) => {
  const usrnm = req.body.username;
  let errors = {};
  const query = { username: usrnm };
  try {
    let user = await userSchema.findOne(query);
    if (user != null) {
      return res.status(403).json({"message":"Username already exists"});
    } else {
      await userSchema.create(req.body, (error, data) => {
        if (error) {
          return next(error);
        } else {
          console.log(data);
          res.json(data);
        }
      });
      // errors.eventKTJID = "User Not found";
      // return res.status(200).json(errors);
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 400;
    }
    console.log(error);
    next(error);
  }
};

// READ Students
exports.allUserMiddleware = async (req, res, next) => {
  
  await userSchema.find((error, data) => {
    if (error) {
      console.log(error);
      return res.json({"message":"No users found", "error":error})
    } else {
      console.log(data); 

      res.status(200).json(data);
    }
  }).clone().catch((error) => {
    res.status(500).send({
      message: error.message + "Some error occurred while retrieving users.",
      })
      });
};

// "_id": "63ccd86fa27e9f6669961ab3",


//{
  // "name": "Mayank Garg",
  // "username": "hello1@ddfg"
// }