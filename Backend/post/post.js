
  
// post Model
const postSchema = require("./post.model");



// post/create-post
// post/all-posts  // to get all the posts
// post/update-post  // to add a request or to change the status of the post
// post/id:  to get the post created by a particular user with the id
exports.createPostMiddleware = async (req, res, next) => {
// CREATE post
  await postSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
}
  
// READ posts
exports.allpostMiddleware = async (req, res, next) => { // Here we need to get only those post whose status is open
  await postSchema.find({regStatus: "open"}).then(( data, error ) => {
    if (error) {
      console.log("In the error of find:", error)
      return next(error);
    } else {
      console.log(data);
      return res.status(200).json(data);
    }
  })
  .catch((error) => {
    console.log(error)
    console.log("Hello at the error catch part")
    res.status(500).json({
      message: error.message + "Some error occurred while retrieving posts.",
    })
})};
  
// all-post
// exports.allpostMiddleware = async (req, res, next) => {
//   postSchema.find((error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.json(data);
//     }
//   });
// });
  

// get-particular user posts
exports.mypostsMiddleware = async (req, res, next) => {
  console.log("In the mypostsMiddleware:", req.body.userId)
  postSchema  
    .find({
      createdBy: req.body.userId,
    })
    .then((data, error) => {
      if (error) {
        console.log("In the error of find:", error);
        return next(error);
      } else {
        console.log(data);
      res.json(data);
      }
    })
    .catch((error) => {
      console.log( "Hello at the error catch part:", error);
      res.status(500).json({
        message: error.message + "Some error occurred while retrieving posts.",
      });
    });
}







// post/update-post  // to add a request or to change the status of the post
exports.updatePostMiddleware = async (req, res, next) => {

  // Get Single post
   await  postSchema.find(
        req.params.id).then((data) => {

      // Update post Data
      postSchema.put((req, res, next) => {
        postSchema.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          (error, data) => {
            if (error) {
              return next(error);
              console.log(error);
            } else {
              res.json(data);
              console.log("post updated successfully !");
            }
          }
        );
      });

    })
    .catch((error) => {
      res.status(500).send({
        message: error.message + "Some error occurred while retrieving posts.",
        });
    });

}
  
//{
//   "title": "new Post for competition",
//   "detail": "New post details for the post",
//   "url":"ww.bsd.dg",
//   "createdBy": "63ccd86fa27e9f6669961ab3",
//   "nMem": 4

// }