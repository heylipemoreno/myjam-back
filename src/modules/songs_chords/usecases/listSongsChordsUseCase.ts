import { SongsChordsRepository } from "../repositories/SongsChordsRepository";

export class ListSongsChordsUseCase{
    async execute(){
        try {
            const list = await SongsChordsRepository.find()
            return list
        } catch (error) {
            console.log(error)
        }
    }
}

export default new ListSongsChordsUseCase();