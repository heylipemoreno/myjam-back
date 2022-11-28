import express from 'express';
import { Auth } from '../../common/middlewares/authMiddleware';
import validationMiddleware from '../../common/middlewares/validationMiddleware';
import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import instrumentController from '../controllers/instrumentController';

export class InstrumentRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Instrument Routes')
    }

    configureRoutes(): express.Application {
        this.app.route('/instrument')
            .all(Auth)
            .get(instrumentController.list)
            .post(validationMiddleware.instrument, instrumentController.create)

        this.app.route('/instrument/:id')
            .all(Auth)
            .get(instrumentController.listID)
            .put(validationMiddleware.instrument, instrumentController.update)
            .delete(instrumentController.delete)

        return this.app;
    }
}