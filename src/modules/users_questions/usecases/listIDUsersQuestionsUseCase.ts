import { UsersQuestionsRepository } from "../repositories/usersQuestionsRepository";

export class ListIDUsersQuestionsUseCase {
    async execute(dataID: number) {
        try {
            const relacion = await UsersQuestionsRepository.findOneBy({ id: dataID })
            return relacion
        } catch (error) {
            console.log(error)
        }
    }
}

export default new ListIDUsersQuestionsUseCase()