import { cryptPassGenerate } from "../helpers/cryptPassGenerate";
import { UsersRepository } from "../repositories/usersRepository";

export class RecoverPasswordUsersUseCase {
    async execute(password: string, userID: number) {
        password = cryptPassGenerate(password)
        try {
            await UsersRepository.update({ id: userID }, {
                password
            })
            return 'Senha atualizada com sucesso.'
        } catch (error) {
            console.log(error)
        }
    }
}

export default new RecoverPasswordUsersUseCase()