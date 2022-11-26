import { UsersLessonsRepository } from "../repositories/UsersLessonsRepository";

export class DeleteUsersLessonsUseCase {
    async execute(dataID: number) {
        try {
            const deleted = await UsersLessonsRepository.delete({ id: dataID })
            return deleted
        } catch (error) {
            console.log(error)
        }
    }
}

export default new DeleteUsersLessonsUseCase()