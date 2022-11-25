import { Chords } from "../../../entities/Chords";
import { ChordsToModel } from "../helpers/ChordsToModel";
import { ChordsRepository } from "../repositories/ChordsRepository";

export class CreateChordsUseCase {
    async execute(data: Chords) {
        try {
            const { chordName, chordImageLink, chordSoundLink } = data
            const newChord = ChordsRepository.create({ chordName, chordImageLink, chordSoundLink })
            await ChordsRepository.save(newChord)
            return ChordsToModel(newChord)
        } catch (error) {
            console.log(error)
        }
    }
}

export default new CreateChordsUseCase();