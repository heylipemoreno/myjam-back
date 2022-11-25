import express from "express";
import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import chordsControllers from "../controllers/chordsControllers";

export class ChordsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app)
    }

    configureRoutes(): express.Application {
        this.app.route('/chords')
            .get(chordsControllers.list)
            .post(chordsControllers.create)

        this.app.route('/chords/:id')
            .get(chordsControllers.listID)
            .put(chordsControllers.update)
            .delete(chordsControllers.delete)

        return this.app
    }
}