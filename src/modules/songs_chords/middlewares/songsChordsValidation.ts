import { validate, Joi } from 'express-validation'

const songs_chords = validate({
    body: Joi.object({
        chordsId: Joi.number().required()
    })
})

export default songs_chords