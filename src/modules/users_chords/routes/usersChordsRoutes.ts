import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import express from 'express'
import usersChordsControllers from "../controllers/usersChordsControllers";
import { Auth } from "../../common/middlewares/authMiddleware";
import users_chords from "../middlewares/usersChordsValidation";

export class UsersChordsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Users_Chords Routes')
    }

    configureRoutes(): express.Application {
        this.app.route('/users_chords')
            .all(Auth)
            .get(usersChordsControllers.list)

        this.app.route('/users_chords/:id')
            .all(Auth)
            .get(usersChordsControllers.listID)
            .post(users_chords, usersChordsControllers.create)
            .put(users_chords, usersChordsControllers.update)
            .delete(usersChordsControllers.delete)

        return this.app
    }
}