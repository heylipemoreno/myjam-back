import { UsersQuestionsRepository } from "../repositories/usersQuestionsRepository";

export class DeleteUsersQuestionsUseCase {
    async execute(dataID: number) {
        try {
            const deleted = await UsersQuestionsRepository.delete({
                id: dataID
            })
            return deleted
        } catch (error) {
            console.log(error)
        }
    }
}

export default new DeleteUsersQuestionsUseCase()