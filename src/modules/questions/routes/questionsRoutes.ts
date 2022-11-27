import express from 'express';
import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import questionsController from '../controllers/questionsController';

export class QuestionsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Questions Routes')
    }

    configureRoutes(): express.Application {
        this.app.route('/questions')
            .get(questionsController.list)
            .post(questionsController.create)

        this.app.route('/questions/:id')
            .get(questionsController.listID)
            .put(questionsController.update)
            .delete(questionsController.delete)

        return this.app
    }
}