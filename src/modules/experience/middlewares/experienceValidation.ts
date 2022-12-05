import { validate, Joi } from 'express-validation'

const experience = validate({
    body: Joi.object({
        experienceOption: Joi.string().required()
    })
})

export default experience