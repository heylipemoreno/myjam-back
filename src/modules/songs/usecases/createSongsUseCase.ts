import { Songs } from "../../../entities/Songs";
import { SongsToModel } from "../helpers/SongsToModel";
import { SongsRepository } from "../repositories/SongsRepository";

export class CreateSongsUseCase {
    async execute(data:Songs){
        try {
            const { songName, songLink, songContent } = data;
            const newSong = SongsRepository.create({ songName, songLink, songContent })
			await SongsRepository.save(newSong)
			return SongsToModel(newSong)
        } catch (error) {
            console.log(error)
        }
    }
}

export default new CreateSongsUseCase();