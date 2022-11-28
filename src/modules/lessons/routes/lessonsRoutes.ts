import express from 'express';
import { Auth } from '../../common/middlewares/authMiddleware';
import validationMiddleware from '../../common/middlewares/validationMiddleware';
import { CommonRoutesConfig } from '../../common/routes/commonRoutes';
import lessonsControllers from '../controllers/lessonsControllers';

export class LessonsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Lessons Routes')
    }

    configureRoutes(): express.Application {
        this.app.route('/lessons')
            .all(Auth)
            .get(lessonsControllers.list)
            .post(validationMiddleware.lessons, lessonsControllers.create)

        this.app.route('/lessons/:id')
            .all(Auth)
            .get(lessonsControllers.listID)
            .put(validationMiddleware.lessons, lessonsControllers.update)
            .delete(lessonsControllers.delete)

        return this.app
    }
}