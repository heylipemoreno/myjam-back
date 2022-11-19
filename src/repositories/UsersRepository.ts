import { AppDataSource } from '../data-source'
import { Users } from '../entities/Users'

export const UsersRepository = AppDataSource.getRepository(Users)