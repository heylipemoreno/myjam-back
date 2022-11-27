import { UsersToModel } from "../helpers/UsersToModel"
import { UsersRepository } from "../repositories/usersRepository";

export class ListUsersUseCase {
    async execute() {
        try {
            const users = await UsersRepository.find();
            const listUsers = users.map(UsersToModel);
            return listUsers;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new ListUsersUseCase();