import { validate, Joi } from 'express-validation'

class ValidationMiddleware {
    users = validate({
        body: Joi.object({
            userName: Joi.string().required(),
            nickname: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required()
        })
    });

    genres = validate({
        body: Joi.object({
            genreName: Joi.string().required()
        })
    });

    classes = validate({
        body: Joi.object({

        })
    });

    lessons = validate({
        body: Joi.object({

        })
    });

    questions = validate({
        body: Joi.object({
            questionContent: Joi.string().required()
        })
    })

    chords = validate({
        body: Joi.object({
            chordName: Joi.string().required()
        })
    })

    songs = validate({
        body: Joi.object({

        })
    })

    login = validate({
        body: Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        })
    })
}

export default new ValidationMiddleware();