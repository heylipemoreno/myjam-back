import constants from "../../../config/constants/constants";
import { Users } from "../../../entities/Users";
import bcrypt from 'bcryptjs';
import { JWTokenGenerate } from "../helpers/JWTokenGenerate";
import { UsersRepository } from "../repositories/usersRepository";

export class LoginUsersUseCase {
    async execute(data: Users) {
        try {
            const { email, password } = data;
            const user = await UsersRepository.findOneBy({
                email: email
            })
            if (user) {
                if (bcrypt.compareSync(password, user.password)) {
                    return {
                        User: user,
                        Token: JWTokenGenerate(user.id)
                    }
                } else {
                    return
                }
            } else {
                return
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export default new LoginUsersUseCase()