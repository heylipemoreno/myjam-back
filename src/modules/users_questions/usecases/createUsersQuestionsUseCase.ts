import { UsersQuestions } from "../../../entities/UsersQuestions";
import { UsersQuestionsRepository } from "../repositories/usersQuestionsRepository";

export class CreateUsersQuestionsUseCase {
    async execute(data: UsersQuestions, dataID: number) {
        try {
            const { instrumentId, experienceId, practiceId, styleId, learnId } = data
            const relacion = await UsersQuestionsRepository.create({
                instrumentId,
                experienceId,
                practiceId,
                styleId,
                learnId,
                usersId: dataID
            })
            await UsersQuestionsRepository.save(relacion)
            return relacion
        } catch (error) {
            console.log(error)
        }
    }
}

export default new CreateUsersQuestionsUseCase()