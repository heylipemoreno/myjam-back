import { UsersChordsRepository } from "../repositories/UsersChordsRepository";

export class ListIDUsersChordsUseCase {
    async execute(dataID: number) {
        try {
            const relacion = await UsersChordsRepository.findOneBy({ usersId: dataID })
            return relacion
        } catch (error) {
            console.log(error)
        }
    }
}

export default new ListIDUsersChordsUseCase();