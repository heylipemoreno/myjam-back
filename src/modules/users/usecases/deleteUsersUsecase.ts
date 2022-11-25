import { UsersRepository } from "../repositories/UsersRepository";

export class DeleteUsersUseCase {
    async execute(dataID: number) {
        try {
            await UsersRepository.delete({ id: dataID })
            return
        } catch (error) {
            console.log(error)
        }
    }
}

export default new DeleteUsersUseCase();