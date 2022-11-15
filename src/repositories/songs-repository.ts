import { AppDataSource } from "../data-source";
import { Songs } from "../entities/Songs";

export const songsRepository = AppDataSource.getRepository(Songs)