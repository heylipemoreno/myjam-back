import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import express from 'express'
import usersControllers from "../controllers/usersControllers";

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app)
    }

    configureRoutes(): express.Application {
        this.app.route('/users')
            .get(usersControllers.list)
            .post(usersControllers.create)

        this.app.route('/users/:id')
            .get(usersControllers.listID)
            .put(usersControllers.update)
            .delete(usersControllers.delete)

        return this.app
    }

}