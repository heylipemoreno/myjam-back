import { secretKey } from "../../../config/secret/secret";
import { Users } from "../../../entities/Users";
import { UsersRepository } from "../../../repositories/UsersRepository";
import bcrypt from 'bcryptjs';
import * as jtw from 'jsonwebtoken';
import { UsersToModel } from "../helpers/UsersToModel";

export class CreateUsersUseCase {
    async execute(data: Users) {
        data.password = bcrypt.hashSync(data.password, 10)
        try {
            const { userName, email, password } = data
            let newUser = UsersRepository.create({ userName, email, password });
            await UsersRepository.save(newUser);
            const token = jtw.sign({
                id: newUser.id
            }, secretKey, {
                expiresIn: '2 day'
            });
            return {
                RegisteredUser: UsersToModel(newUser),
                Token: token
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export default new CreateUsersUseCase();