import express from 'express';
import {CommonRoutesConfig} from "../../common/routes/commonRoutes";
import learnController from '../controllers/learnController';

export class LearnRoutes extends CommonRoutesConfig{
    constructor(app:express.Application){
        super(app)
    }

    configureRoutes():express.Application{
        this.app.route('/learn')
            .get(learnController.list)
            .post(learnController.create)

        this.app.route('/learn/:id')
            .get(learnController.listID)
            .put(learnController.update)
            .delete(learnController.delete)

        return this.app;
    }
}