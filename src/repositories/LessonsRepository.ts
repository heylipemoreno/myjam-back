import{AppDataSource}from '../data-source';
import{Lessons}from '../entities/Lessons';

export const LessonsRepository=AppDataSource.getRepository(Lessons);