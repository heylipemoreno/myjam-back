import { UsersChordsRepository } from "../../users_chords/repositories/UsersChordsRepository";

export class ListChordsRelacionUseCase {
    async execute(dataID: number) {
        try {
            const list = await UsersChordsRepository.findBy({
                usersId: dataID
            })
            return list
        } catch (error) {
            console.log(error)
        }
    }
}

export default new ListChordsRelacionUseCase()