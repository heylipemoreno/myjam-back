import express from "express";
import port from "../../../config/api/port";
import { CommonRoutesConfig } from "./commonRoutes";

export class TestRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app)
    }

    configureRoutes(): express.Application {
        this.app.route('/')
            .get((request: express.Request, response: express.Response) => {
                return response.status(200).send(`API working correctly [Running in Port:${port}]`)
            })

        return this.app
    }

}