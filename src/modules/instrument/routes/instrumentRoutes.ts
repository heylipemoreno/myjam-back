import express from 'express';
import {CommonRoutesConfig} from "../../common/routes/commonRoutes";
import instrumentController from '../controllers/instrumentController';

export class InstrumentRoutes extends CommonRoutesConfig{
    constructor(app:express.Application){
        super(app, 'Instrument Routes')
    }

    configureRoutes():express.Application{
        this.app.route('/instrument')
            .get(instrumentController.list)
            .post(instrumentController.create)

        this.app.route('/instrument/:id')
            .get(instrumentController.listID)
            .put(instrumentController.update)
            .delete(instrumentController.delete)

        return this.app;
    }
}