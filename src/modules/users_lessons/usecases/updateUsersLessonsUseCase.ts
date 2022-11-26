import { UsersLessons } from "../../../entities/UsersLessons";
import { UsersLessonsRepository } from "../repositories/UsersLessonsRepository";

export class UpdateUsersLessonsUseCase {
    async execute(lessonID: number, userID: number) {
        try {
            const relacion = await UsersLessonsRepository.findOneBy({
                usersId: userID,
                lessonsId: lessonID
            })
            if (!relacion) {
                return 'Tabela de relação [Users => Lessons] não encontrada.'
            }
            const updated = await UsersLessonsRepository.update({ id: relacion.id }, {
                completedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
            })
            return 'Tabela de relação [Users => Lessons] atualizada com sucesso.'
        } catch (error) {
            console.log(error)
        }
    }
}

export default new UpdateUsersLessonsUseCase()