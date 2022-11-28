import express from 'express';
import { Auth } from '../../common/middlewares/authMiddleware';
import validationMiddleware from '../../common/middlewares/validationMiddleware';
import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import practiceController from '../controllers/practiceController';

export class PracticeRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Practice Routes')
    }

    configureRoutes(): express.Application {
        this.app.route('/practice')
            .all(Auth)
            .get(practiceController.list)
            .post(validationMiddleware.practice, practiceController.create)

        this.app.route('/practice/:id')
            .all(Auth)
            .get(practiceController.listID)
            .put(validationMiddleware.practice, practiceController.update)
            .delete(practiceController.delete)

        return this.app
    }
}