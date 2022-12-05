import { validate, Joi } from 'express-validation'

const instrument = validate({
    body: Joi.object({
        instrumentOption: Joi.string().required(),
        instrumentImageLink: Joi.string().required(),
        instrumentHoverImageLink: Joi.string().required()
    })
})

export default instrument