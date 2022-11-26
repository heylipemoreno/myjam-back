import { UsersSongs } from "../../../entities/UsersSongs";
import { UsersSongsRepository } from "../repositories/usersSongsRepositories";

export class CreateUsersSongsUseCase {
    async execute(data: UsersSongs, userID: number) {
        try {
            const { songsId } = data
            const relacion = await UsersSongsRepository.create({
                songsId: songsId,
                usersId: userID
            })
            await UsersSongsRepository.save(relacion)
            return relacion
        } catch (error) {
            console.log(error)
        }
    }
}

export default new CreateUsersSongsUseCase()