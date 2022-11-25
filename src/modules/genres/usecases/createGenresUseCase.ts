import { Genres } from "../../../entities/Genres";
import { genresToModels } from "../helpers/genresToModels";
import { GenresRepository } from "../repositories/GenresRepository";

export class CreateGenreUseCase{
    async execute(data:Genres){
        try {
            const { genreName } = data
            const newGenre = GenresRepository.create({ genreName })
			await GenresRepository.save(newGenre)
			return genresToModels(newGenre)
        } catch (error) {
            console.log(error)
        }
    }
}

export default new CreateGenreUseCase()