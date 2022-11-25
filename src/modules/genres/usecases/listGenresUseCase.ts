import { genresToModels } from "../helpers/genresToModels";
import { GenresRepository } from "../repositories/GenresRepository";

export class ListGenresUseCase{
    async execute(){
        try {
            const list = await GenresRepository.find()
            const listGenres = list.map(genresToModels)
            return listGenres
        } catch (error) {
            console.log(error)
        }
    }
}

export default new ListGenresUseCase()