import { SongsChordsRepository } from "../repositories/SongsChordsRepository";

export class DeleteSongsChordsUseCase {
    async execute(dataID: number) {
        try {
            const deleted = await SongsChordsRepository.delete({ id: dataID })
            return deleted
        } catch (error) {
            console.log(error)
        }
    }
}

export default new DeleteSongsChordsUseCase()