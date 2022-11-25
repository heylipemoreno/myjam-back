import { GenresRepository } from "../repositories/GenresRepository";

export class DeleteGenresUseCase {
    async execute(dataID: number) {
        try {
            const deleted = await GenresRepository.delete({ id: dataID })
            return deleted
        } catch (error) {
            console.log(error)
        }
    }
}

export default new DeleteGenresUseCase()