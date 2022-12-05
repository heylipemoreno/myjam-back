import { validate, Joi } from 'express-validation'

const users_lessons = validate({
    body: Joi.object({
        lessonsId: Joi.number().required()
    })
})

export default users_lessons