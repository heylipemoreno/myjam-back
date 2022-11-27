import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import express from 'express'
import genresSongsControllers from "../controllers/genresSongsController";

export class GenresSongsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Genres_Songs Routes')
    }

    configureRoutes(): express.Application {
        this.app.route('/genres_songs')
            .get(genresSongsControllers.list)

        this.app.route('/genres_songs/:id')
            .get(genresSongsControllers.listID)
            .post(genresSongsControllers.create)
            .put(genresSongsControllers.update)
            .delete(genresSongsControllers.delete)

        return this.app
    }
}