import { validate, Joi } from 'express-validation'

const practice = validate({
    body: Joi.object({
        practiceOption: Joi.string().required()
    })
})

export default practice