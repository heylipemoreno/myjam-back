import { Router } from 'express';
import { GenresController } from './controllers/GenresController';
import { UsersController } from './controllers/UsersController';

const routes = Router()

routes.post('/novousuario', new UsersController().create)
routes.post('/novogenero', new GenresController().create)

routes.get('/listarusuarios', new UsersController().list)
routes.get('/listarusuario/:id', new UsersController().listOne)
routes.get('/listargeneros', new GenresController().list)
routes.get('/listargenero/:id', new GenresController().listOne)

routes.put('/atualizarusuario/:id', new UsersController().update)
routes.put('/atualizargenero/:id', new GenresController().update)

routes.delete('/removerusuario/:id', new UsersController().delete)
routes.delete('/removergenero/:id', new GenresController().delete)

export default routes
