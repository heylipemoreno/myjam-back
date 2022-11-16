import { Router } from 'express';
import { UsersController } from './controllers/UsersController';

const routes = Router()

routes.post('/novousuario', new UsersController().create)

routes.get('/listarusuarios', new UsersController().list)
routes.get('/listarusuario/:id', new UsersController().listOne)

routes.put('/atualizarusuario/:id', new UsersController().update)

routes.delete('/removerusuario/:id', new UsersController().delete)

export default routes
