import constants from "../../../config/constants/constants";
import { UsersLessons } from "../../../entities/UsersLessons";
import { UsersLessonsRepository } from "../repositories/UsersLessonsRepository";

export class UpdateUsersLessonsUseCase {
    async execute(data: UsersLessons, userID: number) {
        try {
            const relacion = await UsersLessonsRepository.findOneBy({
                usersId: userID,
                lessonsId: data.lessonsId
            })
            if (!relacion) {
                return constants.CRUD.USERS_LESSONS.NOT_FOUND;
            }
            const updated = await UsersLessonsRepository.update({ id: relacion.id }, {
                completedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
            })
            return constants.CRUD.USERS_LESSONS.UPDATE;
        } catch (error) {
            console.log(error)
        }
    }
}

export default new UpdateUsersLessonsUseCase()