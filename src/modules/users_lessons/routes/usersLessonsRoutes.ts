import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import express from 'express'
import usersLessonsControllers from "../controllers/usersLessonsControllers";

export class UsersLessonsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Users_Lessons Routes')
    }

    configureRoutes(): express.Application {
        this.app.route('/users_lessons')
            .get(usersLessonsControllers.list)

        this.app.route('/users_lessons/:id')
            .get(usersLessonsControllers.listID)
            .post(usersLessonsControllers.create)
            .put(usersLessonsControllers.update)
            .delete(usersLessonsControllers.delete)

        return this.app
    }
}