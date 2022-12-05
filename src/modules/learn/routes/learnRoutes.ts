import express from 'express';
import { Auth } from '../../common/middlewares/authMiddleware';
import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import learnController from '../controllers/learnController';
import learn from '../middlewares/learnValidation';

export class LearnRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Learn Routes')
    }

    configureRoutes(): express.Application {
        this.app.route('/learn')
            .all(Auth)
            .get(learnController.list)
            .post(learn, learnController.create)

        this.app.route('/learn/:id')
            .all(Auth)
            .get(learnController.listID)
            .put(learn, learnController.update)
            .delete(learnController.delete)

        return this.app;
    }
}