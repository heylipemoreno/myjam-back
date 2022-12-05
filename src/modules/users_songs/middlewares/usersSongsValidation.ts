import { validate, Joi } from 'express-validation';

const users_songs = validate({
    body: Joi.object({
        songsId: Joi.number().required()
    })
})

export default users_songs