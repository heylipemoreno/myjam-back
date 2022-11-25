import { SongsToModel } from "../helpers/SongsToModel";
import { SongsRepository } from "../repositories/SongsRepository";

export class ListSongsUseCase{
    async execute(){
        try {
            const songs = await SongsRepository.find()
            const listSongs = songs.map(SongsToModel)
            return listSongs
        } catch (error) {
            console.log(error)
        }
    }
}

export default new ListSongsUseCase();