import { AppDataSource } from "../config/database/data-source";
import { Questions } from "../entities/Questions";

export const QuestionsRepository = AppDataSource.getRepository(Questions)