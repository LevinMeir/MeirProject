const bcrypt = require('bcryptjs')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const errorHandler = require('../utils/errorHandler')

module.exports.login = async function (req, res) {
    const candidate = await User.findOne({ email: req.body.email })

    if (candidate) {
        // проверка пароля, пользователь существует
         const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
        if (passwordResult) {
            // Мы должны сгенерировать токен
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate.id
            }, keys.jwt, { expiresIn: 1000 * 60 * 60 })

            res.status(200).json({
                token: `Bearer ${token}`
            })

        } else {
            res.status(401).json({
                message: 'Invalid password'
            })
        }
    } else {
        // there is no user with this email
        res.status(404).json({ message: 'There is no user with this email' })
    }

}
module.exports.register = async function (req, res) {

    const candidate = await User.findOne({ email: req.body.email })
    if (candidate) {
        res.status(409).json({ message: 'This email is already exist' })
    } else {
         const salt = bcrypt.genSaltSync(10)
         const myPassword = req.body.password

        const user = new User({
            email: req.body.email,
            name: req.body.name,
            password: bcrypt.hashSync(myPassword, salt)
        })

        try {
            await user.save()
            res.status(201).json(user)
        } catch (e) {
            // error method
            errorHandler(res, e)
}
    }




}





