import express from 'express';
import {CommonRoutesConfig} from "../../common/routes/commonRoutes";
import practiceControllers from '../controllers/practiceController';

export class PracticeRoutes extends CommonRoutesConfig{
    constructor(app:express.Application){
        super(app)
    }

    configureRoutes():express.Application{
        this.app.route('/practice')
            .get(practiceControllers.list)
            .post(practiceControllers.create)

        this.app.route('/practice/:id')
            .get(practiceControllers.listID)
            .put(practiceControllers.update)
            .delete(practiceControllers.delete)

        return this.app
    }
}