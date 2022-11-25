import constants from "../../../config/constants/constants";
import { SongsToModel } from "../helpers/SongsToModel";
import { SongsRepository } from "../repositories/SongsRepository";

export class ListIDSongsUseCase {
    async execute(dataID: number) {
        try {
            const song = await SongsRepository.findOneBy({ id: dataID })
            if (!song) {
                return constants.CRUD.SONGS.NOT_FOUND
            }
            return SongsToModel(song)
        } catch (error) {
            console.log(error)
        }
    }
}

export default new ListIDSongsUseCase();