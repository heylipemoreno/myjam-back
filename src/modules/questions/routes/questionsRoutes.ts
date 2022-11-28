import express from 'express';
import { Auth } from '../../common/middlewares/authMiddleware';
import validationMiddleware from '../../common/middlewares/validationMiddleware';
import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import questionsController from '../controllers/questionsController';

export class QuestionsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Questions Routes')
    }

    configureRoutes(): express.Application {
        this.app.route('/questions')
            .all(Auth)
            .get(questionsController.list)
            .post(validationMiddleware.questions, questionsController.create)

        this.app.route('/questions/:id')
            .all(Auth)
            .get(questionsController.listID)
            .put(validationMiddleware.questions, questionsController.update)
            .delete(questionsController.delete)

        return this.app
    }
}