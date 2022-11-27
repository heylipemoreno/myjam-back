import { SongsChords } from "../../../entities/SongsChords";
import {SongsChordsRepository} from "../repositories/SongsChordsRepository";

export class CreateSongsChordsUseCase {
    async execute(data: SongsChords, songsID: number) {
        try {
            const { chordsId } = data;
            const relacion = SongsChordsRepository.create({
                songsId: songsID,
                chordsId: chordsId
            })
            await SongsChordsRepository.save(relacion)
            return relacion
        } catch (error) {
            console.log(error)
        }
    }
}

export default new CreateSongsChordsUseCase()