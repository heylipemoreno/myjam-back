import { Users } from "../../entities/Users";

export function UsersToModel(data: Users) {
    if (!data) {
        return
    }

    const userConvert = {
        id: data.id,
        userName: data.userName,
        email: data.email,
        qtdChords: data.qtdChords,
        qtdSongs: data.qtdSongs,
        totalPoints: data.totalPoints,
        questionsCompleted: data.questionsCompleted
    }

    return userConvert;
}