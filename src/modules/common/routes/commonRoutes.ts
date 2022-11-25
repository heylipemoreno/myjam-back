import express from "express";

export abstract class CommonRoutesConfig {
    constructor(public app: express.Application) {
        this.configureRoutes();
    }

    abstract configureRoutes(): express.Application;
}