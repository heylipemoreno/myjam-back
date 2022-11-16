import { Router } from 'express';
import { UsersController } from './controllers/UsersController';

const routes = Router()

routes.post('/novousuario', new UsersController().create)

routes.get('/listarusuarios', new UsersController().list)

routes.put('/atualizarusuario/:id', new UsersController().update)

export default routes
