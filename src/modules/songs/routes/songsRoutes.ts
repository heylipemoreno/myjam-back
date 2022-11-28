import express from 'express'
import { Auth } from '../../common/middlewares/authMiddleware';
import validationMiddleware from '../../common/middlewares/validationMiddleware';
import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import songsController from '../controllers/songsController';

export class SongsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Songs Routes')
    }

    configureRoutes(): express.Application {
        this.app.route('/songs')
            .all(Auth)
            .get(songsController.list)
            .post(validationMiddleware.songs, songsController.create)

        this.app.route('/songs/:id')
            .all(Auth)
            .get(songsController.listID)
            .put(validationMiddleware.songs, songsController.update)
            .delete(songsController.delete)

        return this.app
    }
}