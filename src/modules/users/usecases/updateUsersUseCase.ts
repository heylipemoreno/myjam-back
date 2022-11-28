import constants from "../../../config/constants/constants";
import { Users } from "../../../entities/Users";
import { cryptPassGenerate } from "../helpers/cryptPassGenerate";
import { UsersRepository } from "../repositories/usersRepository";

export class UpdateUsersUseCase {
    async execute(data: Users, dataID: number) {
        data.password = cryptPassGenerate(data.password)
        try {
            const { userName, email, password, totalPoints, qtdSongs, qtdChords, questionsCompleted } = data
            const user = await UsersRepository.findOneBy({ id: dataID })
            if (!user) {
                return 
            }
            const userUpdated = await UsersRepository.update({ id: dataID }, {
                userName,
                email,
                password,
                totalPoints,
                qtdSongs,
                qtdChords,
                questionsCompleted
            });
            return constants.CRUD.USERS.UPDATE
        } catch (error) {
            console.log(error)
        }
    }
}

export default new UpdateUsersUseCase()