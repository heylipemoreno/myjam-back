import express from 'express';
import { Auth } from '../../common/middlewares/authMiddleware';
import validationMiddleware from '../../common/middlewares/validationMiddleware';
import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import styleController from '../controllers/styleController';

export class StyleRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Style Routes')
    }

    configureRoutes(): express.Application {
        this.app.route('/style')
            .all(Auth)
            .get(styleController.list)
            .post(validationMiddleware.style, styleController.create)

        this.app.route('/style/:id')
            .all(Auth)
            .get(styleController.listID)
            .put(validationMiddleware.style, styleController.update)
            .delete(styleController.delete)

        return this.app;
    }
}