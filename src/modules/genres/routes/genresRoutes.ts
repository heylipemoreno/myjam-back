import express from "express";
import { Auth } from "../../common/middlewares/authMiddleware";
import validationMiddleware from "../../common/middlewares/validationMiddleware";
import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import genresControllers from "../controllers/genresControllers";

export class GenresRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Genres Routes')
    }

    configureRoutes(): express.Application {
        this.app.route('/genres')
            .all(Auth)
            .get(genresControllers.list)
            .post(validationMiddleware.genres, genresControllers.create)

        this.app.route('/genres/:id')
            .all(Auth)
            .get(genresControllers.listID)
            .put(validationMiddleware.genres, genresControllers.update)
            .delete(genresControllers.delete)

        return this.app
    }
}