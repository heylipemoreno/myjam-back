import { SongsChords } from "../../../entities/SongsChords";
import { SongsChordsRepository } from "../repositories/SongsChordsRepository";

export class UpdateSongsChordsUseCase {
    async execute(chordsID: number, songsID: number) {
        try {
            const relacion = await SongsChordsRepository.findOneBy({
               songsId: songsID,
                chordsId: chordsID
            })
            if (!relacion) {
                return 'Tabela de relação [Songs => chords] não encontrada.'
            }else{
                return 'Tabela de relação [Songs => chords] atualizada com sucesso.'}
        } catch (error) {
            console.log(error)
        }
    }
}

export default new UpdateSongsChordsUseCase()