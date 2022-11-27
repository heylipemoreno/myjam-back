import { UsersQuestionsRepository } from "../repositories/usersQuestionsRepository";

export class ListUsersQuestionsUseCase{
    async execute(){
        try {
            const list = await UsersQuestionsRepository.find()
            return list
        } catch (error) {
            console.log(error)
        }
    }
}

export default new ListUsersQuestionsUseCase()