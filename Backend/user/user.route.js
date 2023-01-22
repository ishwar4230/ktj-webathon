const express = require('express')
const router = express.Router();
const {allUserMiddleware, createUserMiddleware} =  require('./user')

router.get('/all-users', allUserMiddleware)
router.post('/create-user', createUserMiddleware)

module.exports = router