import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import express from 'express';
import UsersController from '../controllers/usersController';
import { Auth } from "../../common/middlewares/authMiddleware";
import users from "../middlewares/usersValidation";
import users_login from "../middlewares/usersLoginValidation";
import users_forgotPass from "../middlewares/usersForgotValidation";
import users_recoverPass from "../middlewares/usersRecoverValidation";

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Users Routes')
    }

    configureRoutes(): express.Application {
        this.app.route('/users')
            .get(Auth, UsersController.list)
            .post(users, UsersController.create)

        this.app.route('/users/login')
            .post(users_login, UsersController.login)

        this.app.route('/users/forgot-pass')
            .post(users_forgotPass, UsersController.forgotPass)

        this.app.route('/users/recover-pass')
            .post(Auth, users_recoverPass, UsersController.recoverPass)

        this.app.route('/users/token')
            .all(Auth)
            .get(UsersController.getByToken)

        this.app.route('/users/:id')
            .all(Auth)
            .get(UsersController.listID)
            .put(users, UsersController.update)
            .delete(UsersController.delete)

        this.app.route('/users/:id/questions')
            .all(Auth)
            .get(UsersController.questionsRelacion)

        this.app.route('/users/:id/lessons')
            .all(Auth)
            .get(UsersController.lessonsRelacion)

        this.app.route('/users/:id/songs')
            .all(Auth)
            .get(UsersController.songsRelacion)

        this.app.route('/users/:id/chords')
            .all(Auth)
            .get(UsersController.chordsRelacion)

        return this.app
    }

}