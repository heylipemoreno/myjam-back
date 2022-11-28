import express from 'express'
import cors from 'cors'
import debug from 'debug';
import port from './config/api/port'

import * as winston from 'winston'
import * as expressWinston from 'express-winston'
import * as http from 'http';

import errorsMiddleware from './modules/common/middlewares/errorsMiddleware';
import { AppDataSource } from './data-source'
import routes from './config/api/routes';
import { CommonRoutesConfig } from './modules/common/routes/commonRoutes';



AppDataSource.initialize().then(() => {
    const app: express.Application = express();
    const server: http.Server = http.createServer(app);
    const debugLog: debug.IDebugger = debug('MY_JAM:');

    app.use(express.json())
    app.use(cors())

    const logOptions: expressWinston.LoggerOptions = {
        transports: [new winston.transports.Console()],
        format: winston.format.combine(
            winston.format.json(),
            winston.format.prettyPrint(),
            winston.format.colorize({ all: true })
        )
    }

    if (!process.env.DEBUG) {
        logOptions.meta = false;
    }

    app.use(expressWinston.logger(logOptions));

    app.use(errorsMiddleware)

    return server.listen(port, () => {
        routes.forEach((route: CommonRoutesConfig) => {
            debugLog(`${route.getName()} - Status: OK`)
        })
        debugLog(`Starting server...`)
        debugLog(`Server started on port ${port}`)
    })
})
