import { GenresSongs } from "../../../entities/GenresSongs";
import { GenresSongsRepository } from "../repositories/GenresSongsRepository";

export class UpdateGenresSongsUseCase {
    async execute(data: GenresSongs, songsID: number) {
        try {
            const relacion = await GenresSongsRepository.findOneBy({
                songsId: songsID,
                genresId: data.genresId
            })
            if (!relacion) {
                return 'Tabela de relação [Songs => Genres] não encontrada.'
            }else{
                return 'Tabela de relação [Songs => Genres] atualizada com sucesso.'
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export default new UpdateGenresSongsUseCase()