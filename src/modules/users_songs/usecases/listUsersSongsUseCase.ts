import { UsersSongsRepository } from "../repositories/usersSongsRepositories"

export class listUsersSongsUseCase{
    async execute() {
        try {
            const list = await UsersSongsRepository.find()
            return list
        } catch (error) {
            console.log(error)
        }
    }
}

export default new listUsersSongsUseCase()