import { AppDataSource } from '../config/database/data-source'
import { Songs } from '../entities/Songs'

export const SongsRepository = AppDataSource.getRepository(Songs)