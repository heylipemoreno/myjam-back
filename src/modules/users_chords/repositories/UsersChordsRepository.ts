import{AppDataSource}from '../../../data-source';
import{UsersChords}from '../../../entities/UsersChords';

export const UsersChordsRepository=AppDataSource.getRepository(UsersChords);