import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import express from 'express'
import usersSongsControllers from "../controllers/usersSongsControllers";
import validationMiddleware from "../../common/middlewares/validationMiddleware";
import { Auth } from "../../common/middlewares/authMiddleware";

export class UsersSongsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Users_Songs Routes')
    }

    configureRoutes(): express.Application {
        this.app.route('/users_songs')
            .all(Auth)
            .get(usersSongsControllers.list)

        this.app.route('/users_songs/:id')
            .all(Auth)
            .get(usersSongsControllers.listID)
            .post(validationMiddleware.users_songs, usersSongsControllers.create)
            .put(validationMiddleware.users_songs, usersSongsControllers.update)
            .delete(usersSongsControllers.delete)

        return this.app
    }
}