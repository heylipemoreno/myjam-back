import express from 'express';
import { Auth } from '../../common/middlewares/authMiddleware';
import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import questionsController from '../controllers/questionsController';
import questions from '../middlewares/questionsValidation';

export class QuestionsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Questions Routes')
    }

    configureRoutes(): express.Application {
        this.app.route('/questions')
            .all(Auth)
            .get(questionsController.list)
            .post(questions, questionsController.create)

        this.app.route('/questions/:id')
            .all(Auth)
            .get(questionsController.listID)
            .put(questions, questionsController.update)
            .delete(questionsController.delete)

        return this.app
    }
}