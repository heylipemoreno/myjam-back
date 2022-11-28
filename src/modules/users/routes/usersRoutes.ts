import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import express from 'express';
import UsersController from '../controllers/usersController';
import validationMiddleware from "../../common/middlewares/validationMiddleware";
import { Auth } from "../../common/middlewares/authMiddleware";

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Users Routes')
    }

    configureRoutes(): express.Application {
        this.app.route('/users')
            .get(Auth, UsersController.list)
            .post(validationMiddleware.users, UsersController.create)

        this.app.route('/users/login')
            .post(UsersController.login)

        this.app.route('/users/forgot-pass')
            .post(validationMiddleware.users_login, UsersController.forgotPass)

        this.app.route('/users/recover-pass')
            .post(Auth, validationMiddleware.users_recoverPass, UsersController.recoverPass)

        this.app.route('/users/token')
            .all(Auth)
            .get(UsersController.getByToken)

        this.app.route('/users/:id')
            .all(Auth)
            .get(UsersController.listID)
            .put(validationMiddleware.users, UsersController.update)
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