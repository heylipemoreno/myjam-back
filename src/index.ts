import express from 'express'
import cors from 'cors'
import debug from 'debug';
import port from './config/api/port'

import * as winston from 'winston'
import * as expressWinston from 'express-winston'
import * as http from 'http';

import errorsMiddleware from './modules/common/middlewares/errorsMiddleware';
import { AppDataSource } from './data-source'

import { CommonRoutesConfig } from './modules/common/routes/commonRoutes'
import { TestRoutes } from './modules/common/routes/testRoutes'
import { ChordsRoutes } from './modules/chords/routes/chordsRoutes';
import { ExperienceRoutes } from './modules/experience/routes/experienceRoutes';
import { GenresRoutes } from './modules/genres/routes/genresRoutes';
import { InstrumentRoutes } from './modules/instrument/routes/instrumentRoutes';
import { LearnRoutes } from './modules/learn/routes/learnRoutes';
import { LessonsRoutes } from './modules/lessons/routes/lessonsRoutes';
import { PracticeRoutes } from './modules/practice/routes/practiceRoutes';
import { QuestionsRoutes } from './modules/questions/routes/questionsRoutes';
import { SongsRoutes } from './modules/songs/routes/songsRoutes';
import { StyleRoutes } from './modules/style/routes/styleRoutes';
import { UsersLessonsRoutes } from './modules/users_lessons/routes/usersLessonsRoutes';
import { UsersSongsRoutes } from './modules/users_songs/routes/usersSongsRoutes';
import { UsersQuestionsRoutes } from './modules/users_questions/routes/usersQuestionsRoutes';
import { UsersChords } from './entities/UsersChords';
import { UsersChordsRoutes } from './modules/users_chords/routes/usersChordsRoutes';
import { UsersRoutes } from './modules/users/routes/usersRoutes';

AppDataSource.initialize().then(() => {
    const app: express.Application = express();
    const server: http.Server = http.createServer(app);
    const routes: CommonRoutesConfig[] = [];
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

    routes.push(new TestRoutes(app))
    routes.push(new ChordsRoutes(app))
    routes.push(new ExperienceRoutes(app))
    routes.push(new GenresRoutes(app))
    routes.push(new InstrumentRoutes(app))
    routes.push(new LearnRoutes(app))
    routes.push(new LessonsRoutes(app))
    routes.push(new PracticeRoutes(app))
    routes.push(new QuestionsRoutes(app))
    routes.push(new SongsRoutes(app))
    routes.push(new StyleRoutes(app))
    routes.push(new UsersLessonsRoutes(app))
    routes.push(new UsersSongsRoutes(app))
    routes.push(new UsersQuestionsRoutes(app))
    routes.push(new UsersChordsRoutes(app))
    routes.push(new UsersRoutes(app))

    app.use(errorsMiddleware)

    return server.listen(port, () => {
        routes.forEach((route: CommonRoutesConfig) => {
            debugLog(`${route.getName()} - Status: OK`)
        })
        debugLog(`Starting server...`)
        debugLog(`Server started on port ${port}`)
    })
})
