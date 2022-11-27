import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import express from 'express'
import usersSongsControllers from "../controllers/usersSongsControllers";

export class UsersSongsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Users_Songs Routes')
    }

    configureRoutes(): express.Application {
        this.app.route('/users_songs')
            .get(usersSongsControllers.list)

        this.app.route('/users_songs/:id')
            .get(usersSongsControllers.listID)
            .post(usersSongsControllers.create)
            .put(usersSongsControllers.update)
            .delete(usersSongsControllers.delete)

        return this.app
    }
}