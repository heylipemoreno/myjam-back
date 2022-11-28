import express from "express";
import { Auth } from "../../common/middlewares/authMiddleware";
import validationMiddleware from "../../common/middlewares/validationMiddleware";
import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import chordsControllers from "../controllers/chordsControllers";

export class ChordsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Chords Routes')
    }

    configureRoutes(): express.Application {
        this.app.route('/chords')
            .all(Auth)
            .get(chordsControllers.list)
            .post(validationMiddleware.chords, chordsControllers.create)

        this.app.route('/chords/:id')
            .all(Auth)
            .get(chordsControllers.listID)
            .put(validationMiddleware.chords, chordsControllers.update)
            .delete(chordsControllers.delete)

        return this.app
    }
}