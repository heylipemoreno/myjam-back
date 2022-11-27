import { GenresSongsRepository } from "../repositories/GenresSongsRepository";

export class ListGenresSongsUseCase{
    async execute(){
        try {
            const list = await GenresSongsRepository.find()
            return list
        } catch (error) {
            console.log(error)
        }
    }
}

export default new ListGenresSongsUseCase();