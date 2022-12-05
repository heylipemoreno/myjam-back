import { validate, Joi } from 'express-validation'

const chords = validate({
    body: Joi.object({
        chordName: Joi.string().required(),
        chordImageLink: Joi.string().required(),
        chordSoundLink: Joi.string().required()
    })
})

export default chords