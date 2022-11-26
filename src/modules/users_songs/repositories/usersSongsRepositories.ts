import { AppDataSource } from '../../../data-source'
import { UsersSongs } from '../../../entities/UsersSongs'

export const UsersSongsRepository = AppDataSource.getRepository(UsersSongs)