import { AppDataSource } from '../../../data-source';
import { UsersLessons } from '../../../entities/UsersLessons';

export const UsersLessonsRepository = AppDataSource.getRepository(UsersLessons);