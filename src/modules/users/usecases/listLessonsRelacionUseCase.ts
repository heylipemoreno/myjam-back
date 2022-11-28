import { UsersLessonsRepository } from "../../users_lessons/repositories/UsersLessonsRepository";

export class ListLessonsRelacionUseCase {
    async execute(dataID: number) {
        try {
            const list = await UsersLessonsRepository.findBy({
                usersId: dataID
            })
            return list
        } catch (error) {
            console.log(error)
        }
    }
}

export default new ListLessonsRelacionUseCase()