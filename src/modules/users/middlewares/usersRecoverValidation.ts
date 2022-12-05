import { validate, Joi } from 'express-validation'

const users_recoverPass = validate({
    body: Joi.object({
        password: Joi.string().required()
    })
})

export default users_recoverPass