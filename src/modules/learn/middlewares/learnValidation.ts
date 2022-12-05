import { validate, Joi } from 'express-validation'

const learn = validate({
    body: Joi.object({
        learnOption: Joi.string().required()
    })
})

export default learn