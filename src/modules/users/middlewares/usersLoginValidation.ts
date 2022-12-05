import { validate, Joi } from 'express-validation'

const users_login = validate({
    body: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })
})

export default users_login