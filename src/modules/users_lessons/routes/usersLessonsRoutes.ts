import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import express from 'express'
import usersLessonsControllers from "../controllers/usersLessonsControllers";
import { Auth } from "../../common/middlewares/authMiddleware";
import users_lessons from "../middlewares/usersLessonsValidation";

export class UsersLessonsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Users_Lessons Routes')
    }

    configureRoutes(): express.Application {
        this.app.route('/users_lessons')
            .all(Auth)
            .get(usersLessonsControllers.list)

        this.app.route('/users_lessons/:id')
            .all(Auth)
            .get(usersLessonsControllers.listID)
            .post(users_lessons, usersLessonsControllers.create)
            .put(users_lessons, usersLessonsControllers.update)
            .delete(usersLessonsControllers.delete)

        return this.app
    }
}