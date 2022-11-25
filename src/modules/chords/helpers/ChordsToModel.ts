import { Chords } from "../../../entities/Chords";

export function ChordsToModel(data: Chords) {
    if(!data){
        return
    }

    const chord = {
        id: data.id,
        chordName: data.chordName,
        chordImageLink: data.chordImageLink,
        chordSoundLink: data.chordSoundLink
    }

    return chord
}