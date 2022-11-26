import express from 'express';
import {CommonRoutesConfig} from "../../common/routes/commonRoutes";
import practiceController from '../controllers/practiceController';

export class PracticeRoutes extends CommonRoutesConfig{
    constructor(app:express.Application){
        super(app)
    }

    configureRoutes():express.Application{
        this.app.route('/practice')
            .get(practiceController.list)
            .post(practiceController.create)

        this.app.route('/practice/:id')
            .get(practiceController.listID)
            .put(practiceController.update)
            .delete(practiceController.delete)

        return this.app
    }
}