import { UsersRepository } from "../repositories/usersRepository";


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