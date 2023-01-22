const express = require('express')
const router = express.Router();

// post/create-post
// post/all-posts  // to get all the posts
// post/update-post/id:  // to add a request or to change the status of the post
// post/myposts/id:  to get the post created by a particular user with the id

const {allpostMiddleware, createPostMiddleware, updatePostMiddleware, mypostsMiddleware} =  require('./post')

router.get('/all-posts', allpostMiddleware)
router.post('/create-post', createPostMiddleware)
router.post('/update-post:id', updatePostMiddleware)
router.get('/myposts', mypostsMiddleware)

module.exports = router
