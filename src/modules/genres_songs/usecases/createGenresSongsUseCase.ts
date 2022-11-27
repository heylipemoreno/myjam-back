import { GenresSongs } from "../../../entities/GenresSongs";
import { GenresSongsRepository } from "../repositories/GenresSongsRepository";

export class CreateGenresSongsUseCase {
    async execute(data: GenresSongs, songsID: number) {
        try {
            const { genresId } = data;
            const relacion = GenresSongsRepository.create({
                songsId: songsID,
                genresId: genresId
            })
            await GenresSongsRepository.save(relacion)
            return relacion
        } catch (error) {
            console.log(error)
        }
    }
}

export default new CreateGenresSongsUseCase()