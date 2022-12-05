import express from 'express';
import { Auth } from '../../common/middlewares/authMiddleware';
import { CommonRoutesConfig } from "../../common/routes/commonRoutes";
import experienceController from '../controllers/experienceController';
import experience from '../middlewares/experienceValidation';

export class ExperienceRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'Experience Routes')
    }

    configureRoutes(): express.Application {
        this.app.route('/experience')
            .all(Auth)
            .get(experienceController.list)
            .post(experience, experienceController.create)

        this.app.route('/experience/:id')
            .all(Auth)
            .get(experienceController.listID)
            .put(experience, experienceController.update)
            .delete(experienceController.delete)

        return this.app;
    }
}