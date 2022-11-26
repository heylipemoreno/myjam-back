import { UsersLessonsRepository } from "../repositories/UsersLessonsRepository";

export class ListUsersLessonsUseCase{
    async execute(){
        try {
            const list = await UsersLessonsRepository.find()
            return list
        } catch (error) {
            console.log(error)
        }
    }
}

export default new ListUsersLessonsUseCase();