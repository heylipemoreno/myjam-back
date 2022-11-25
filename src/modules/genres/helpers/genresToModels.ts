import { Genres } from "../../../entities/Genres";

export function genresToModels(data: Genres) {
    if(!data){
        return
    }
    
    const genre = {
        id: data.id,
        genreName: data.genreName
    }

    return genre
}