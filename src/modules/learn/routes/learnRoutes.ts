import express from 'express';
import { Auth } from '../../common/middlewares/authMiddleware';
import validationMiddleware from '../../common/middlewares/validationMiddleware';
import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import learnController from '../controllers/learnController';

export class LearnRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Learn Routes')
    }

    configureRoutes(): express.Application {
        this.app.route('/learn')
            .all(Auth)
            .get(learnController.list)
            .post(validationMiddleware.learn, learnController.create)

        this.app.route('/learn/:id')
            .all(Auth)
            .get(learnController.listID)
            .put(validationMiddleware.learn, learnController.update)
            .delete(learnController.delete)

        return this.app;
    }
}