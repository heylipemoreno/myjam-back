import { Users } from "../../../entities/Users";
import { cryptPassGenerate } from "../helpers/cryptPassGenerate";
import { JWTokenGenerate } from "../helpers/JWTokenGenerate";
import { UsersToModel } from "../helpers/UsersToModel";
import { UsersRepository } from "../repositories/UsersRepository";

export class CreateUsersUseCase {
    async execute(data: Users) {
        data.password = cryptPassGenerate(data.password)
        try {
            const { userName, email, password } = data
            const newUser = UsersRepository.create({ userName, email, password })
            await UsersRepository.save(newUser)
            const token = JWTokenGenerate(newUser.id)
            return {
                RegistedUser: UsersToModel(newUser),
                Token: token
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export default new CreateUsersUseCase()