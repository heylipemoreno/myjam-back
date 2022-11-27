import constants from "../../../config/constants/constants";
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
                return constants.CRUD.GENRES_SONGS.NOT_FOUND;
            }else{
                return constants.CRUD.GENRES_SONGS.UPDATE;
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export default new UpdateGenresSongsUseCase()