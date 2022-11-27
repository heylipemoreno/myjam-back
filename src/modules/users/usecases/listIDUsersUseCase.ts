import constants from "../../../config/constants/constants";
import { UsersToModel } from "../helpers/UsersToModel";
import { UsersRepository } from "../repositories/usersRepository";

export class ListIDUsersUseCase {
    async execute(dataID: number) {
		try {
			const user = await UsersRepository.findOneBy({ id: dataID })
			if (!user) {
				return constants.CRUD.USERS.NOT_FOUND
			} else {
				return UsersToModel(user);
			}
		} catch (error) {
			console.log(error)
		}
    }
}

export default new ListIDUsersUseCase();