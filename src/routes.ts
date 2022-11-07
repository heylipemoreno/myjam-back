import { Router } from 'express';
import { GenresController } from './controllers/genres-controller';
import { LevelsController } from './controllers/levels-controller';
import { SongsController } from './controllers/songs-controller';
import { UsersController } from './controllers/users-controller';

const routes = Router()

routes.post('/novousuario', new UsersController().create)
routes.post('/novogenero', new GenresController().create)
routes.post('/novonivel', new LevelsController().create)
routes.post('/novamusica/:genero/:nivel', new SongsController().create)

routes.put('/atualizargenero/:usuario', new UsersController().generoUsuario)

export default routes