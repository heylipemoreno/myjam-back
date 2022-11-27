import constants from "../../../config/constants/constants";
import { Users } from "../../../entities/Users";
import { cryptPassGenerate } from "../helpers/cryptPassGenerate";
import { JWTokenGenerate } from "../helpers/JWTokenGenerate";
import { UsersToModel } from "../helpers/UsersToModel";
import { UsersRepository } from "../repositories/usersRepository";

export class CreateUsersUseCase {
    async execute(data: Users) {
        data.password = cryptPassGenerate(data.password)
        try {
            const { userName, email, password } = data
            const user = await UsersRepository.findOneBy({ email: email })
            if(user){
                return constants.CRUD.USERS.EXISTS
            }
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