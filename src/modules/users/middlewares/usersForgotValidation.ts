import { validate, Joi } from 'express-validation'

const users_forgotPass = validate({
    body: Joi.object({
        email: Joi.string().email().required()
    })
})

export default users_forgotPass