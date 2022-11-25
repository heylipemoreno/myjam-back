import { Songs } from "../../../entities/Songs";

export function SongsToModel(data: Songs) {
    if (!data) {
        return
    }

    const song = {
        id: data.id,
        songName: data.songName,
        songLink: data.songLink,
        songContent: data.songContent
    }

    return song
}