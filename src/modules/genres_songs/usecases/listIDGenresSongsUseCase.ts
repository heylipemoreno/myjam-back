import { GenresSongsRepository } from "../repositories/GenresSongsRepository";

export class ListIDGenresSongsUseCase {
    async execute(dataID: number) {
        try {
            const relacion = await GenresSongsRepository.findOneBy({ songsId: dataID })
            return relacion
        } catch (error) {
            console.log(error)
        }
    }
}

export default new ListIDGenresSongsUseCase();