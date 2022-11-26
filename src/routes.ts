import { Router } from 'express';
import validationMiddleware from './middlewares/validationMiddleware';
import { UsersController } from './controllers/UsersController';
import { LessonsController } from './controllers/LessonsController';
import { LoginController } from './controllers/LoginController';
import { RegisterController } from './controllers/RegisterController';
import { Auth } from './middlewares/authMiddleware';

const routes = Router()

// ***********************************************

//ROTAR PERSONALIZADAS PARA SERVIÇOS (CURTO TEMPO)

//SERVICE BY TOKEN
routes.get('/users/listlessons', new UsersController().listOnboarding)
routes.put('/users/lessons/:id/completed', new UsersController().completedLesson)

//REGISTER
routes.post('/users/register', new RegisterController().register);
routes.post('/users/questions', new RegisterController().question)

//LOGIN
routes.post('/users/login', new LoginController().login)

//RECOVERY PASS
routes.post('/users/password/forgot', new LoginController().forgotPassword)
routes.post('/users/password/recover', new LoginController().recoverPassword)

//LIST LESSON WITH ALL QUESTIONS
routes.get('/lessons/:id/questions', new LessonsController().listWithQuestions)

// ***********************************************

export default routes