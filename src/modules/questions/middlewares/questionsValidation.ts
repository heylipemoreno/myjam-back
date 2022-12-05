import { validate, Joi } from 'express-validation'

const questions = validate({
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

export default questions