const express = require('express')
const router = express.Router()
const room = require('./routes/room')

router.use('/room' , room)




module.exports = router