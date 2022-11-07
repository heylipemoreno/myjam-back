import { AppDataSource } from "../data-source";
import { Songs } from "../entities/songs";

export const songsRepository = AppDataSource.getRepository(Songs)