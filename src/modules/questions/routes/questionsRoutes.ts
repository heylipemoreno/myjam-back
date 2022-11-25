import express from 'express';
import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import questionsControllers from '../controllers/questionsControllers';

export class QuestionsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app)
    }

    configureRoutes(): express.Application {
        this.app.route('/questions')
            .get(questionsControllers.list)
            .post(questionsControllers.create)

        this.app.route('/questions/:id')
            .get(questionsControllers.listID)
            .put(questionsControllers.update)
            .delete(questionsControllers.delete)

        return this.app
    }
}