import { Router } from 'express';
import { ChordsController } from './controllers/ChordsController';
import { GenresController } from './controllers/GenresController';
import { UsersController } from './controllers/UsersController';
import { QuestionsController } from './controllers/QuestionsController';
import { LessonsController } from './controllers/LessonsController';
import { ClassesController } from './controllers/ClassesController';

const routes = Router()

//POST
routes.post('/users', new UsersController().create)
routes.post('/genres', new GenresController().create)
routes.post('/chords', new ChordsController().create)
routes.post('/questions', new QuestionsController().create)
routes.post('/lessons', new LessonsController().create)
routes.post('/classes', new ClassesController().create)

//GET ALL
routes.get('/users', new UsersController().list)
routes.get('/genres', new GenresController().list)
routes.get('/chords', new ChordsController().list)
routes.get('/questions',new QuestionsController().list)
routes.get('/lessons', new LessonsController().list)
routes.get('/classes', new ClassesController().list)

//GET ID
routes.get('/users/:id', new UsersController().listOne)
routes.get('/genres/:id', new GenresController().listOne)
routes.get('/chords/:id', new ChordsController().listOne)
routes.get('/questions/:id', new QuestionsController().listOne)
routes.get('/lessons/:id', new LessonsController().listOne)
routes.get('/classes/:id', new ClassesController().listOne)

//UPDATE
routes.put('/users/:id', new UsersController().update)
routes.put('/genres/:id', new GenresController().update)
routes.put('/chords/:id', new ChordsController().update)
routes.put('/questions/:id', new QuestionsController().update)
routes.put('/lessons/:id', new LessonsController().update)
routes.put('/classes/:id', new ClassesController().update)

//DELETE
routes.delete('/users/:id', new UsersController().delete)
routes.delete('/genres/:id', new GenresController().delete)
routes.delete('/chords/:id', new ChordsController().delete)
routes.delete('/questions/:id', new QuestionsController().delete)
routes.delete('/lessons/:id', new LessonsController().delete)
routes.delete('/classes/:id', new ClassesController().delete)

export default routes
