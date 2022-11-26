import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import express from 'express'
import usersLessonsControllers from "../controllers/usersLessonsControllers";

export class UsersLessonsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app)
    }

    configureRoutes(): express.Application {
        this.app.route('/users_lessons')
            .get(usersLessonsControllers.list)
            .post(usersLessonsControllers.create)

        this.app.route('/users_lessons/:id')
            .get(usersLessonsControllers.listID)
            .put(usersLessonsControllers.update)
            .delete(usersLessonsControllers.delete)

        return this.app
    }
}