import { AppDataSource } from "../data-source";
import { Genres } from "../entities/genres";

export const genresRepository = AppDataSource.getRepository(Genres)