import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import express from 'express'
import songsChordsControllers from "../controllers/songsChordsControllers";
import { Auth } from "../../common/middlewares/authMiddleware";
import songs_chords from "../middlewares/songsChordsValidation";

export class SongsChordsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Songs_Chords Routes')
    }

    configureRoutes(): express.Application {
        this.app.route('/songs_chords')
            .all(Auth)
            .get(songsChordsControllers.list)
            .post(songs_chords, songsChordsControllers.create)

        this.app.route('/songs_chords/:id')
            .all(Auth)
            .get(songsChordsControllers.listID)
            .put(songs_chords, songsChordsControllers.update)
            .delete(songsChordsControllers.delete)

        return this.app;
    }
}