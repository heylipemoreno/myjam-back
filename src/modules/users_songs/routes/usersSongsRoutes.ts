import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import express from 'express'
import usersSongsControllers from "../controllers/usersSongsControllers";

export class UsersSongsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app)
    }

    configureRoutes(): express.Application {
        this.app.route('/users_songs')
            .get(usersSongsControllers.list)
            .post(usersSongsControllers.create)

        this.app.route('/users_songs/:id')
            .get(usersSongsControllers.listID)
            .put(usersSongsControllers.update)
            .delete(usersSongsControllers.delete)

        return this.app
    }
}