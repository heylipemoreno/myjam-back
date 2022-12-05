import { validate, Joi } from 'express-validation'

const genres = validate({
    body: Joi.object({
        genreName: Joi.string().required()
    })
})

export default genres