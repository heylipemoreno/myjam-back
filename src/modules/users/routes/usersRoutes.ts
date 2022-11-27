import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import express from 'express'
import UsersController from '../controllers/usersController'

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app)
    }

    configureRoutes(): express.Application {
        this.app.route('/users')
            .get(UsersController.list)
            .post(UsersController.create)

        this.app.route('/users/login')
            .post(UsersController.login)

        this.app.route('/users/forgot-pass')
            .post(UsersController.forgotPass)

        this.app.route('/users/recover-pass')
            .post(UsersController.recoverPass)

        this.app.route('/users/:id')
            .get(UsersController.listID)
            .put(UsersController.update)
            .delete(UsersController.delete)

        return this.app
    }

}