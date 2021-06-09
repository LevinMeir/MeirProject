const express = require('express')
const controller = require('../controllers/auth')
const router = express.Router()
const passport = require('passport')

router.get('/login', (req, res)=>{
    res.status(200).json({login: true}) //это для проверки, потом удалить анифг 
})
//  localhost:5000/api/auth/login
router.post('/login', controller.login)
//  localhost:5000/api/auth/register
router.post('/register', controller.register)
module.exports = router