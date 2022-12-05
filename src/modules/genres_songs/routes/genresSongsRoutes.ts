import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import express from 'express'
import genresSongsControllers from "../controllers/genresSongsController";
import { Auth } from "../../common/middlewares/authMiddleware";
import chords from "../../chords/middlewares/chordsValidation";

export class GenresSongsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Genres_Songs Routes')
    }

    configureRoutes(): express.Application {
        this.app.route('/genres_songs')
            .all(Auth)
            .get(genresSongsControllers.list)

        this.app.route('/genres_songs/:id')
            .all(Auth)
            .get(genresSongsControllers.listID)
            .post(chords, genresSongsControllers.create)
            .put(chords, genresSongsControllers.update)
            .delete(genresSongsControllers.delete)

        return this.app
    }
}