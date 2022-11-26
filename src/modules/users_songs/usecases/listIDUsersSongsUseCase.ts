import { UsersSongsRepository } from "../repositories/usersSongsRepositories";

export class listIDUsersSongsUseCase {
    async execute(dataID: number) {
        try {
            const relacion = await UsersSongsRepository.findOneBy({ id: dataID })
            return relacion
        } catch (error) {
            console.log(error)
        }
    }
}

export default new listIDUsersSongsUseCase()