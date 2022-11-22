import { validate, Joi } from 'express-validation'

class ValidationMiddleware {
    register = validate({
        body: Joi.object({
            userName: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required()
        })
    });

    registerQuestions = validate({
        body: Joi.object({
            instrumentId: Joi.number().required(),
            experienceId: Joi.number().required(),
            practiceId: Joi.number().required(),
            styleId: Joi.number().required(),
            learnId: Joi.number().required()
        })
    })

    genres = validate({
        body: Joi.object({
            genreName: Joi.string().required()
        })
    });

    lessons = validate({
        body: Joi.object({
            lessonName: Joi.string().required(),
            lessonImageLink: Joi.string().required()
        })
    });

    questions = validate({
        body: Joi.object({
            questionTitle: Joi.string().required(),
            questionImageLink: Joi.string().required(),
            questionContent: Joi.string().required(),
            questionOptions: Joi.string().required(),
            questionOptionCorrect: Joi.string().required(),
            questionTemplate: Joi.string().required(),
            isExplication: Joi.number().required(),
            lessonsId: Joi.number().required(),
            songsId: Joi.number()
        })
    })

    chords = validate({
        body: Joi.object({
            chordName: Joi.string().required(),
            chordImageLink: Joi.string().required(),
            chordSoundLink: Joi.string().required()
        })
    })

    songs = validate({
        body: Joi.object({
            songName: Joi.string().required(),
            songLink: Joi.string(),
            songContent: Joi.string().required()
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