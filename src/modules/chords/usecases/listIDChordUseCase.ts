import constants from "../../../config/constants/constants";
import { ChordsToModel } from "../helpers/ChordsToModel";
import { ChordsRepository } from "../repositories/ChordsRepository";

export class ListIDChordsUseCase {
    async execute(dataID: number) {
        try {
            const chord = await ChordsRepository.findOneBy({ id: dataID })
            if (!chord) {
                return constants.CRUD.CHORDS.NOT_FOUND
            }
            return ChordsToModel(chord)
        } catch (error) {
            console.log(error)
        }
    }
}

export default new ListIDChordsUseCase();