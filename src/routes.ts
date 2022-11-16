import { Router } from 'express';
import { ChordsController } from './controllers/ChordsController';
import { GenresController } from './controllers/GenresController';
import { UsersController } from './controllers/UsersController';

const routes = Router()

routes.post('/novousuario', new UsersController().create)
routes.post('/novogenero', new GenresController().create)
routes.post('/novoacorde', new ChordsController().create)

routes.get('/listarusuarios', new UsersController().list)
routes.get('/listarusuario/:id', new UsersController().listOne)
routes.get('/listargeneros', new GenresController().list)
routes.get('/listargenero/:id', new GenresController().listOne)
routes.get('/listaracordes', new ChordsController().list)
routes.get('/listaracorde/:id', new ChordsController().listOne)

routes.put('/atualizarusuario/:id', new UsersController().update)
routes.put('/atualizargenero/:id', new GenresController().update)
routes.put('/atualizaracorde/:id', new ChordsController().update)

routes.delete('/removerusuario/:id', new UsersController().delete)
routes.delete('/removergenero/:id', new GenresController().delete)
routes.delete('/removeracorde/:id', new ChordsController().delete)

export default routes
