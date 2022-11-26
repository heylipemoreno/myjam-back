import express from 'express';
import {CommonRoutesConfig} from "../../common/routes/commonRoutes";
import styleController from '../controllers/styleController';

export class StyleRoutes extends CommonRoutesConfig{
    constructor(app:express.Application){
        super(app)
    }

    configureRoutes():express.Application{
        this.app.route('/style')
            .get(styleController.list)
            .post(styleController.create)

        this.app.route('/style/:id')
            .get(styleController.listID)
            .put(styleController.update)
            .delete(styleController.delete)

        return this.app;
    }
}