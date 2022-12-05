import { validate, Joi } from 'express-validation'

const users = validate({
    body: Joi.object({
        userName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })
})

export default users