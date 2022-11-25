import { SongsRepository } from "../repositories/SongsRepository";

export class DeleteSongsUseCase {
    async execute(dataID: number) {
        try {
            const deleted = await SongsRepository.delete({ id: dataID })
            return deleted
        } catch (error) {
            console.log(error)
        }
    }
}

export default new DeleteSongsUseCase();