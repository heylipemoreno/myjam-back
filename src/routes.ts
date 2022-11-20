import { Router } from 'express';
import validationMiddleware from './middlewares/validationMiddleware';
import { ChordsController } from './controllers/ChordsController';
import { GenresController } from './controllers/GenresController';
import { UsersController } from './controllers/UsersController';
import { QuestionsController } from './controllers/QuestionsController';
import { LessonsController } from './controllers/LessonsController';
import { ClassesController } from './controllers/ClassesController';
import { SongsController } from './controllers/SongsController';
import { LoginController } from './controllers/LoginController';
import { RegisterController } from './controllers/RegisterController';
import { UsersQuestionsRepository } from './repositories/UsersQuestionsRepository';

const routes = Router()

//POST
// criação de usuário virou register
routes.post('/genres', validationMiddleware.genres, new GenresController().create)
routes.post('/chords', validationMiddleware.chords, new ChordsController().create)
routes.post('/questions', validationMiddleware.questions, new QuestionsController().create)
routes.post('/lessons', validationMiddleware.lessons, new LessonsController().create)
routes.post('/classes', validationMiddleware.classes, new ClassesController().create)
routes.post('/songs', validationMiddleware.songs, new SongsController().create)

//GET ALL
routes.get('/users', new UsersController().list)
routes.get('/genres', new GenresController().list)
routes.get('/chords', new ChordsController().list)
routes.get('/questions', new QuestionsController().list)
routes.get('/lessons', new LessonsController().list)
routes.get('/classes', new ClassesController().list)
routes.get('/songs', new SongsController().list)

//LOGIN
routes.post('/users/login', new LoginController().login)

//REGISTER
routes.post('/users/register', validationMiddleware.register, new RegisterController().register);
routes.post('/users/questions', validationMiddleware.registerQuestions, new RegisterController().question)

//GET ID
routes.get('/users/:id', new UsersController().listOne)
routes.get('/genres/:id', new GenresController().listOne)
routes.get('/chords/:id', new ChordsController().listOne)
routes.get('/questions/:id', new QuestionsController().listOne)
routes.get('/lessons/:id', new LessonsController().listOne)
routes.get('/classes/:id', new ClassesController().listOne)
routes.get('/songs/:id', new SongsController().listOne)

//UPDATE
routes.put('/users/:id', new UsersController().update)
routes.put('/genres/:id', validationMiddleware.genres, new GenresController().update)
routes.put('/chords/:id', validationMiddleware.chords, new ChordsController().update)
routes.put('/questions/:id', validationMiddleware.questions, new QuestionsController().update)
routes.put('/lessons/:id', validationMiddleware.lessons, new LessonsController().update)
routes.put('/classes/:id', validationMiddleware.classes, new ClassesController().update)
routes.put('/songs/:id', validationMiddleware.songs, new SongsController().update)

//DELETE
routes.delete('/users/:id', new UsersController().delete)
routes.delete('/genres/:id', new GenresController().delete)
routes.delete('/chords/:id', new ChordsController().delete)
routes.delete('/questions/:id', new QuestionsController().delete)
routes.delete('/lessons/:id', new LessonsController().delete)
routes.delete('/classes/:id', new ClassesController().delete)
routes.delete('/songs/:id', new SongsController().delete)


//ATUALIZAÇÕES


export default routes
