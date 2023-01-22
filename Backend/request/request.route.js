const express = require('express')
const router = express.Router();
// request/create-request
// request/all-request   // to get all the request for a particular post
// request/update-request  // to change the status of the request here, may need to change the status of the post also if the max no. of participent limit reaches so made the status of the post to closed and also remove all the request form the request array of the post and also all the request in that post which are pending in that post
// post to completed

const {createRequestMiddleware, allRequestMiddleware, updateRequestMiddleware} =  require('./request')

router.post('/create-request', createRequestMiddleware)
router.get('/all-request', allRequestMiddleware)
router.post('/update-request', updateRequestMiddleware)

module.exports = router