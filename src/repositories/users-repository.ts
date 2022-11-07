import { AppDataSource } from "../data-source";
import { Users } from "../entities/users";

export const usersRepository = AppDataSource.getRepository(Users)