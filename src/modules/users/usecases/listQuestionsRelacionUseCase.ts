import { UsersQuestionsRepository } from "../../users_questions/repositories/usersQuestionsRepository";

export class ListQuestionsRelacionUseCase {
    async execute(dataID: number) {
        try {
            const list = await UsersQuestionsRepository.findBy({
                usersId: dataID
            })
            return list
        } catch (error) {
            console.log(error)
        }
    }
}

export default new ListQuestionsRelacionUseCase()