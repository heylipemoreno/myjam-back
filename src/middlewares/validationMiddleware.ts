import { validate, Joi } from 'express-validation'

class ValidationMiddleware {
    users = validate({
        body: Joi.object({
            userName: Joi.string().required(),
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
            className: Joi.string().required()
        })
    });

    lessons = validate({
        body: Joi.object({
            lessonName: Joi.string().required()
        })
    });

    questions = validate({
        body: Joi.object({
            questionContent: Joi.string().required(),
            questionAnswer:Joi.string().required(),
            lessonsId: Joi.number().required()
        })
    })

    chords = validate({
        body: Joi.object({
            chordName: Joi.string().required()
        })
    })

    songs = validate({
        body: Joi.object({
            songName: Joi.string().required(),
            songVideoLink: Joi.string().required(),
            songContentLink: Joi.string().required(),
            classesId: Joi.number().required()
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