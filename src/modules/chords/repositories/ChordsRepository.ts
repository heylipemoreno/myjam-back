import { AppDataSource } from '../../../data-source'
import { Chords } from '../../../entities/Chords'

export const ChordsRepository = AppDataSource.getRepository(Chords)