import { Router } from 'express';
import { UsersController } from './controllers/UsersController';

const routes = Router()

routes.post('/novousuario', new UsersController().create)

routes.get('/listarusuarios', new UsersController().list)

export default routes
