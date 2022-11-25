import constants from "../../../config/constants/constants";
import { Songs } from "../../../entities/Songs";
import { SongsRepository } from "../repositories/SongsRepository";

export class UpdateSongsUseCase {
    async execute(data: Songs, dataID: number) {
        try {
            const { songName, songLink, songContent } = data
            const song = await SongsRepository.findOneBy({ id: dataID })
            if (!song) {
                return constants.CRUD.SONGS.NOT_FOUND
            }
            await SongsRepository.update(dataID, {
                songName,
                songLink,
                songContent
            });
            return constants.CRUD.SONGS.UPDATE
        } catch (error) {
            console.log(error)
        }
    }
}

export default new UpdateSongsUseCase();