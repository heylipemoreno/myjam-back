import { SongsChordsRepository } from "../repositories/SongsChordsRepository";

export class ListIDSongsChordsUseCase{
    async execute(dataID:number){
        try {
            const relacion = await SongsChordsRepository.findOneBy({songsId:dataID})
            return relacion
        } catch (error) {
            console.log(error)
        }
    }
}

export default new ListIDSongsChordsUseCase();