import { validate, Joi } from 'express-validation'

class ValidationMiddleware {
    chords = validate({
        body: Joi.object({
            chordName: Joi.string().required(),
            chordImageLink: Joi.string().required(),
            chordSoundLink: Joi.string().required()
        })
    })

    experience = validate({
        body: Joi.object({
            experienceOption: Joi.string().required()
        })
    })

    genres = validate({
        body: Joi.object({
            genreName: Joi.string().required()
        })
    })

    instrument = validate({
        body: Joi.object({
            instrumentOption: Joi.string().required(),
            instrumentImageLink: Joi.string().required(),
            instrumentHoverImageLink: Joi.string().required()
        })
    })

    learn = validate({
        body: Joi.object({
            learnOption: Joi.string().required()
        })
    })

    lessons = validate({
        body: Joi.object({
            lessonName: Joi.string().required(),
            lessonImageLink: Joi.string().required()
        })
    })

    practice = validate({
        body: Joi.object({
            practiceOption: Joi.string().required()
        })
    })

    questions = validate({
        body: Joi.object({
            questionTitle: Joi.string().required(),
            questionImageLink: Joi.string(),
            questionContent: Joi.string(),
            questionOption: Joi.string(),
            questionOptionCorrect: Joi.string(),
            questionTemplate: Joi.string().required(),
            isExplanation: Joi.number().required(),
            lessonsId: Joi.number()
        })
    })

    songs = validate({
        body: Joi.object({
            songName: Joi.string().required(),
            songLink: Joi.string(),
            songContent: Joi.string().required()
        })
    })

    style = validate({
        body: Joi.object({
            styleOption: Joi.string().required()
        })
    })

    users_chords = validate({
        body: Joi.object({
            chordsId: Joi.number().required()
        })
    })

    users_lessons = validate({
        body: Joi.object({
            lessonsId: Joi.number().required()
        })
    })

    users_songs = validate({
        body: Joi.object({
            songsId: Joi.number().required()
        })
    })


    users = validate({
        body: Joi.object({
            userName: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required()
        })
    })

    users_login = validate({
        body: Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        })
    })

    users_forgotPass = validate({
        body: Joi.object({
            email: Joi.string().email().required()
        })
    })

    users_recoverPass = validate({
        body: Joi.object({
            password: Joi.string().required()
        })
    })

    users_question = validate({
        body: Joi.object({
            instrumentId: Joi.number().required(),
            experienceId: Joi.number().required(),
            practiceId: Joi.number().required(),
            styleId: Joi.number().required(),
            learnId: Joi.number().required()
        })
    })
}

export default new ValidationMiddleware();