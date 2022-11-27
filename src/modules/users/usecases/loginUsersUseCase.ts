import constants from "../../../config/constants/constants";
import { Users } from "../../../entities/Users";
import bcrypt from 'bcryptjs';
import { JWTokenGenerate } from "../helpers/JWTokenGenerate";
import { UsersRepository } from "../repositories/usersRepository";

export class LoginUsersUseCase {
    async execute(data: Users) {
        try {
            const { email, password } = data;
            const user = await UsersRepository.findOneOrFail({
                where: { email }
            })
            if (!user) {
                return constants.LOGIN.USECASE.EMAIL_INCORRECT
            }
            if (!bcrypt.compareSync(password, user.password)) {
                return constants.LOGIN.USECASE.PASSWORD_INCORRECT
            }

            return {
                User: user,
                Token: JWTokenGenerate(user.id)
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export default new LoginUsersUseCase()