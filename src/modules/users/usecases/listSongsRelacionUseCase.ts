import { UsersSongsRepository } from "../../users_songs/repositories/usersSongsRepositories";

export class ListSongsRelacionUseCase {
    async execute(dataID: number) {
        try {
            const list = await UsersSongsRepository.findBy({
                usersId: dataID
            })
            return list
        } catch (error) {
            console.log(error)
        }
    }
}

export default new ListSongsRelacionUseCase()