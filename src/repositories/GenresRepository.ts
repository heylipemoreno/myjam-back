import { AppDataSource } from '../config/database/data-source'
import { Genres } from '../entities/Genres'

export const GenresRepository = AppDataSource.getRepository(Genres)