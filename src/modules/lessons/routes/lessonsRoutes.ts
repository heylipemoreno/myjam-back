import express from 'express';
import { Auth } from '../../common/middlewares/authMiddleware';
import { CommonRoutesConfig } from '../../common/routes/commonRoutes';
import lessonsControllers from '../controllers/lessonsControllers';
import lessons from '../middlewares/lessonsValidation';

export class LessonsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Lessons Routes')
    }

    configureRoutes(): express.Application {
        this.app.route('/lessons')
            .all(Auth)
            .get(lessonsControllers.list)
            .post(lessons, lessonsControllers.create)

        this.app.route('/lessons/:id')
            .all(Auth)
            .get(lessonsControllers.listID)
            .put(lessons, lessonsControllers.update)
            .delete(lessonsControllers.delete)

        return this.app
    }
}