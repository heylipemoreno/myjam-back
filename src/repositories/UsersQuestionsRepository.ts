import { AppDataSource } from '../data-source';
import { UsersQuestions } from '../entities/UsersQuestions';

export const UsersQuestionsRepository = AppDataSource.getRepository(UsersQuestions);