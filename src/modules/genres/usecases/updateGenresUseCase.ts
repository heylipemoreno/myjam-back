import constants from "../../../config/constants/constants";
import { Genres } from "../../../entities/Genres";
import { GenresRepository } from "../repositories/GenresRepository";

export class UpdateGenresUseCase {
    async execute(data: Genres, dataID: number) {
        try {
            const { genreName } = data
            const genre = await GenresRepository.findOneBy({ id: dataID })
            if (!genre) {
                return
            }
            await GenresRepository.update({ id: dataID }, {
                genreName
            });
            return constants.CRUD.GENRES.UPDATE
        } catch (error) {
            console.log(error)
        }
    }
}

export default new UpdateGenresUseCase()