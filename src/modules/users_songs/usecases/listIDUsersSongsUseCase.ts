import { UsersSongsRepository } from "../repositories/usersSongsRepositories";

export class listIDUsersSongsUseCase {
    async execute(dataID: number) {
        try {
            const relacion = await UsersSongsRepository.findOneBy({ usersId: dataID })
            return relacion
        } catch (error) {
            console.log(error)
        }
    }
}

export default new listIDUsersSongsUseCase()