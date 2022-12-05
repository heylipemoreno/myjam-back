import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import express from 'express'
import usersQuestionsController from "../controllers/usersQuestionsController";
import { Auth } from "../../common/middlewares/authMiddleware";
import users_question from "../middlewares/usersQuestionsValidation";

export class UsersQuestionsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Users_Questions Routes')
    }

    configureRoutes(): express.Application {
        this.app.route('/users_questions')
            .all(Auth)
            .get(usersQuestionsController.list)

        this.app.route('/users_questions/:id')
            .all(Auth)
            .get(usersQuestionsController.listID)
            .post(users_question, usersQuestionsController.create)
            .put(users_question, usersQuestionsController.update)
            .delete(usersQuestionsController.delete)

        return this.app
    }
}