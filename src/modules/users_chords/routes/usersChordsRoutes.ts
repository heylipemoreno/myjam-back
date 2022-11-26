import {CommonRoutesConfig} from "../../common/routes/commonRoutes";
import express from 'express'
import usersChordsControllers from "../controllers/usersChordsControllers";

export class UsersChordsRoutes extends CommonRoutesConfig{
    constructor(app:express.Application){
        super(app)
    }

    configureRoutes():express.Application{
        this.app.route('/users_chords')
            .get(usersChordsControllers.list)
            .post(usersChordsControllers.create)

        this.app.route('/users_chords/:id')
            .get(usersChordsControllers.listID)
            .put(usersChordsControllers.update)
            .delete(usersChordsControllers.delete)

        return this.app
    }
}