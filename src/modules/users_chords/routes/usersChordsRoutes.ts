import {CommonRoutesConfig} from "../../common/routes/commonRoutes";
import express from 'express'
import usersChordsControllers from "../controllers/usersChordsControllers";

export class UsersChordsRoutes extends CommonRoutesConfig{
    constructor(app:express.Application){
        super(app, 'Users_Chords Routes')
    }

    configureRoutes():express.Application{
        this.app.route('/users_chords')
            .get(usersChordsControllers.list)

        this.app.route('/users_chords/:id')
            .get(usersChordsControllers.listID)
            .post(usersChordsControllers.create)
            .put(usersChordsControllers.update)
            .delete(usersChordsControllers.delete)

        return this.app
    }
}