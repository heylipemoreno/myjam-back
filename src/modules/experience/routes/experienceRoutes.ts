import express from 'express';
import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import experienceController from '../controllers/experienceController';

export class ExperienceRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Experience Routes')
    }

    configureRoutes(): express.Application {
        this.app.route('/experience')
            .get(experienceController.list)
            .post(experienceController.create)

        this.app.route('/experience/:id')
            .get(experienceController.listID)
            .put(experienceController.update)
            .delete(experienceController.delete)

        return this.app;
    }
}