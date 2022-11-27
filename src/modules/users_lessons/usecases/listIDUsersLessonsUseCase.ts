import { UsersLessonsRepository } from "../repositories/UsersLessonsRepository";

export class ListIDUsersLessonsUseCase {
    async execute(dataID: number) {
        try {
            const relacion = await UsersLessonsRepository.findOneBy({ usersId: dataID })
            return relacion
        } catch (error) {
            console.log(error)
        }
    }
}

export default new ListIDUsersLessonsUseCase();