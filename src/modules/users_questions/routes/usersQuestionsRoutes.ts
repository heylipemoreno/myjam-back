import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import express from 'express'
import usersQuestionsController from "../controllers/usersQuestionsController";

export class UsersQuestionsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Users_Questions Routes')
    }

    configureRoutes(): express.Application {
        this.app.route('/users_questions')
            .get(usersQuestionsController.list)

        this.app.route('/users_questions/:id')
            .get(usersQuestionsController.listID)
            .post(usersQuestionsController.create)
            .put(usersQuestionsController.update)
            .delete(usersQuestionsController.delete)

        return this.app
    }
}