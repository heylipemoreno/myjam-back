import { validate, Joi } from 'express-validation'

const users_question = validate({
    body: Joi.object({
        instrumentId: Joi.number().required(),
        experienceId: Joi.number().required(),
        practiceId: Joi.number().required(),
        styleId: Joi.number().required(),
        learnId: Joi.number().required()
    })
})

export default users_question