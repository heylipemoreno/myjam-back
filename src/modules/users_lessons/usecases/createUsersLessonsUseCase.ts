import { UsersLessons } from "../../../entities/UsersLessons";
import { UsersLessonsRepository } from "../repositories/UsersLessonsRepository";

export class CreateUsersLessonsUseCase {
    async execute(data: UsersLessons) {
        try {
            const { usersId, lessonsId } = data;
            const relacion = UsersLessonsRepository.create({ usersId, lessonsId })
            await UsersLessonsRepository.save(relacion)
            return relacion
        } catch (error) {
            console.log(error)
        }
    }
}

export default new CreateUsersLessonsUseCase()