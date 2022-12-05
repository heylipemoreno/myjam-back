import { validate, Joi } from 'express-validation'

const songs = validate({
    body: Joi.object({
        songName: Joi.string().required(),
        songLink: Joi.string(),
        songContent: Joi.string().required()
    })
})

export default songs