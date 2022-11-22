import { AppDataSource } from '../data-source';
import { SongsChords } from '../entities/SongsChords';

export const SongsChordsRepository = AppDataSource.getRepository(SongsChords);