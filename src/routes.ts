import { Router } from 'express';
import { GenresController } from './controllers/genres-controller';

const routes = Router()

routes.post('/genre', new GenresController().create)

export default routes