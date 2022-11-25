import { ChordsToModel } from "../helpers/ChordsToModel";
import { ChordsRepository } from "../repositories/ChordsRepository";

export class ListChordsUseCase{
    async execute(){
        try {
            const list = await ChordsRepository.find()
            const listChords = list.map(ChordsToModel)
            return listChords;
        } catch (error) {
            console.log(error)
        }
    }
}

export default new ListChordsUseCase();