const express = require('express')
const { addRoom } = require('../../controller/C_room')
const router = express.Router()

router.get('/addRoom' , addRoom)

module.exports = router