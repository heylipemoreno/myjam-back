import { UsersLessons } from "../../../entities/UsersLessons";
import { UsersLessonsRepository } from "../repositories/UsersLessonsRepository";

export class CreateUsersLessonsUseCase {
    async execute(data: UsersLessons, userID: number) {
        try {
            const { lessonsId } = data;
            const relacion = UsersLessonsRepository.create({
                usersId: userID,
                lessonsId: lessonsId
            })
            await UsersLessonsRepository.save(relacion)
            return relacion
        } catch (error) {
            console.log(error)
        }
    }
}

export default new CreateUsersLessonsUseCase()