import { UsersQuestionsRepository } from "../repositories/usersQuestionsRepository";

export class ListIDUsersQuestionsUseCase {
    async execute(dataID: number) {
        try {
            const relacion = await UsersQuestionsRepository.findOneBy({ usersId: dataID })
            return relacion
        } catch (error) {
            console.log(error)
        }
    }
}

export default new ListIDUsersQuestionsUseCase()