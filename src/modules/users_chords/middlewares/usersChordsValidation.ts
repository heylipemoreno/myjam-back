import { validate, Joi } from 'express-validation'

const users_chords = validate({
    body: Joi.object({
        chordsId: Joi.number().required()
    })
})

export default users_chords