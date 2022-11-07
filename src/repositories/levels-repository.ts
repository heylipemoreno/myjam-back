import { AppDataSource } from "../data-source";
import { Levels } from "../entities/levels";

export const levelsRepository = AppDataSource.getRepository(Levels)