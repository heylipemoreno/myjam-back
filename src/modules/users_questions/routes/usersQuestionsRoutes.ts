import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import express from 'express'
import usersQuestionsController from "../controllers/usersQuestionsController";

export class UsersQuestionsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app)
    }

    configureRoutes(): express.Application {
        this.app.route('/users_questions')
            .get(usersQuestionsController.list)
            .post(usersQuestionsController.create)

        this.app.route('/user_questions/:id')
            .get(usersQuestionsController.listID)
            .put(usersQuestionsController.update)
            .delete(usersQuestionsController.delete)

        return this.app
    }
}