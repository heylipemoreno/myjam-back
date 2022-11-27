import constants from "../../../config/constants/constants";
import { UsersQuestions } from "../../../entities/UsersQuestions";
import { UsersQuestionsRepository } from "../repositories/usersQuestionsRepository";

export class UpdateUsersQuestionsUseCase {
    async execute(data: UsersQuestions, dataID: number) {
        try {
            const { instrumentId, experienceId, practiceId, styleId, learnId } = data
            const relacion = await UsersQuestionsRepository.findOneBy({
                usersId: dataID
            })
            if (!relacion) {
                return constants.CRUD.USERS_QUESTIONS.NOT_FOUND;
            }
            const updated = await UsersQuestionsRepository.update({ id: relacion.id }, {
                instrumentId,
                experienceId,
                practiceId,
                styleId,
                learnId
            })
            return constants.CRUD.USERS_QUESTIONS.UPDATE;
        } catch (error) {
            console.log(error)
        }
    }
}

export default new UpdateUsersQuestionsUseCase()