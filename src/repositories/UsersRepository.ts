import { AppDataSource } from '../config/database/data-source'
import { Users } from '../entities/Users'

export const UsersRepository = AppDataSource.getRepository(Users)