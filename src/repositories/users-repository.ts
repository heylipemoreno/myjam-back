import { AppDataSource } from "../data-source";
import { Users } from "../entities/Users";

export const usersRepository = AppDataSource.getRepository(Users)