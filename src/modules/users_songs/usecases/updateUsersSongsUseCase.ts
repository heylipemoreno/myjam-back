import constants from "../../../config/constants/constants";
import { UsersSongs } from "../../../entities/UsersSongs";
import { UsersSongsRepository } from "../repositories/usersSongsRepositories";

export class UpdateUsersSongsUseCase {
    async execute(data: UsersSongs, userID: number) {
        try {
            const relacion = await UsersSongsRepository.findOneBy({
                usersId: userID,
                songsId: data.songsId
            })
            if (!relacion) {
                return constants.CRUD.USERS_SONGS.NOT_FOUND;
            }
            await UsersSongsRepository.update({ id: relacion.id }, {
                learnedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
            })
            return constants.CRUD.USERS_SONGS.UPDATE;
        } catch (error) {
            console.log(error)
        }
    }
}

export default new UpdateUsersSongsUseCase()