import express from 'express';
import { CommonRoutesConfig } from '../../common/routes/commonRoutes';
import lessonsControllers from '../controllers/lessonsControllers';

export class LessonsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Lessons Routes')
    }

    configureRoutes(): express.Application {
        this.app.route('/lessons')
            .get(lessonsControllers.list)
            .post(lessonsControllers.create)

        this.app.route('/lessons/:id')
            .get(lessonsControllers.listID)
            .put(lessonsControllers.update)
            .delete(lessonsControllers.delete)

        return this.app
    }
}