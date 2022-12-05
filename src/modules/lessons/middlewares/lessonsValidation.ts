import { validate, Joi } from 'express-validation'

const lessons = validate({
    body: Joi.object({
        lessonName: Joi.string().required(),
        lessonImageLink: Joi.string().required()
    })
})

export default lessons