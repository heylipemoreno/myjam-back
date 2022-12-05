import express from 'express'
import { Auth } from '../../common/middlewares/authMiddleware';
import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import songsController from '../controllers/songsController';
import songs from '../middlewares/songsValidation';

export class SongsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Songs Routes')
    }

    configureRoutes(): express.Application {
        this.app.route('/songs')
            .all(Auth)
            .get(songsController.list)
            .post(songs, songsController.create)

        this.app.route('/songs/:id')
            .all(Auth)
            .get(songsController.listID)
            .put(songs, songsController.update)
            .delete(songsController.delete)

        return this.app
    }
}