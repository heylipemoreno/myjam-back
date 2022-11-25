import constants from "../../../config/constants/constants";
import { Chords } from "../../../entities/Chords";
import { ChordsRepository } from "../repositories/ChordsRepository";

export class UpdateChordsUseCase {
    async execute(data: Chords, dataID: number) {
        try {
            const { chordName, chordImageLink, chordSoundLink } = data
            const chord = await ChordsRepository.findOneBy({ id: dataID })
            if (!chord) {
                return constants.CRUD.CHORDS.NOT_FOUND
            }
            await ChordsRepository.update({ id: dataID }, {
                chordName,
                chordImageLink,
                chordSoundLink
            });
            return constants.CRUD.CHORDS.UPDATE
        } catch (error) {
            console.log(error)
        }
    }
}

export default new UpdateChordsUseCase();