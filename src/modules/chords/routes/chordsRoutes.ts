import express from "express";
import { Auth } from "../../common/middlewares/authMiddleware";
import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import chordsControllers from "../controllers/chordsControllers";
import chords from "../middlewares/chordsValidation";

export class ChordsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Chords Routes')
    }

    configureRoutes(): express.Application {
        this.app.route('/chords')
            .all(Auth)
            .get(chordsControllers.list)
            .post(chords, chordsControllers.create)

        this.app.route('/chords/:id')
            .all(Auth)
            .get(chordsControllers.listID)
            .put(chords, chordsControllers.update)
            .delete(chordsControllers.delete)

        return this.app
    }
}