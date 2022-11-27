import { GenresSongsRepository } from "../repositories/GenresSongsRepository";

export class DeleteGenresSongsUseCase {
    async execute(dataID: number) {
        try {
            const deleted = await GenresSongsRepository.delete({ id: dataID })
            return deleted
        } catch (error) {
            console.log(error)
        }
    }
}

export default new DeleteGenresSongsUseCase()