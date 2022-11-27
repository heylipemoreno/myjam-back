import express from "express";
import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import genresControllers from "../controllers/genresControllers";

export class GenresRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Genres Routes')
    }

    configureRoutes(): express.Application {
        this.app.route('/genres')
            .get(genresControllers.list)
            .post(genresControllers.create)

        this.app.route('/genres/:id')
            .get(genresControllers.listID)
            .put(genresControllers.update)
            .delete(genresControllers.delete)

        return this.app
    }
}