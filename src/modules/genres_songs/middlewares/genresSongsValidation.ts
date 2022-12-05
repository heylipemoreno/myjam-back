import { validate, Joi } from 'express-validation'

const genres_songs = validate({
    body: Joi.object({
        songsId: Joi.number().required()
    })
})

export default genres_songs