import { UsersLessons } from "../../../entities/UsersLessons";
import { UsersLessonsRepository } from "../repositories/UsersLessonsRepository";

export class UpdateUsersLessonsUseCase {
    async execute(data: UsersLessons, dataID: number) {
        try {
            const { usersId, lessonsId, completedAt } = data
            const relacion = await UsersLessonsRepository.findOneBy({ id: dataID })
            if (!relacion) {
                return 'Tabela de relação [Users => Lessons] não encontrada.'
            }
            const updated = await UsersLessonsRepository.update({ id: dataID }, {
                completedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
            })
            return 'Tabela de relação [Users => Lessons] atualizada com sucesso.'
        } catch (error) {
            console.log(error)
        }
    }
}

export default new UpdateUsersLessonsUseCase()