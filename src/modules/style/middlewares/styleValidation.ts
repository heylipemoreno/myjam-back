import { validate, Joi } from 'express-validation'

const style = validate({
    body: Joi.object({
        styleOption: Joi.string().required()
    })
})

export default style