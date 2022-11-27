import { AppDataSource } from '../../../data-source';
import { GenresSongs } from '../../../entities/GenresSongs';

export const GenresSongsRepository = AppDataSource.getRepository(GenresSongs);