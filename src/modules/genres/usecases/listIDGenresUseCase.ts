import constants from "../../../config/constants/constants";
import { genresToModels } from "../helpers/genresToModels";
import { GenresRepository } from "../repositories/GenresRepository";

export class ListIDGenresUseCase{
    async execute(dataID:number){
        try {
            const genre = await GenresRepository.findOneBy({id:dataID})
            if(!genre){
                return 
            }
            return genresToModels(genre)
        } catch (error) {
            console.log(error)
        }
    }
}

export default new ListIDGenresUseCase();