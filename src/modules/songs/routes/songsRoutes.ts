import express from 'express'
import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import songsController from '../controllers/songsController';

export class SongsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app)
    }

    configureRoutes(): express.Application {
        this.app.route('/songs')
            .get(songsController.list)
            .post(songsController.create)

        this.app.route('/songs/:id')
            .get(songsController.listID)
            .put(songsController.update)
            .delete(songsController.delete)

        return this.app
    }
}