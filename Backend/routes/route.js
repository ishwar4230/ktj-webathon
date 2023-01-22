const express = require('express')
const router = express.Router();

const userRoutes = require('../user/user.route')
const requestRoutes = require('../request/request.route')
const postRoutes = require('../post/post.route')

router.route('/user',  userRoutes)
router.route('/post',  postRoutes)
router.route('/request',  requestRoutes)







