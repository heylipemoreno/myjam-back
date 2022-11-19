import{AppDataSource}from '../config/database/data-source';
import{Lessons}from '../entities/Lessons';

export const LessonsRepository=AppDataSource.getRepository(Lessons);