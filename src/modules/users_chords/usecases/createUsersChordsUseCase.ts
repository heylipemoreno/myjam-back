import { UsersChords } from "../../../entities/UsersChords";
import { UsersChordsRepository } from "../repositories/UsersChordsRepository";

export class CreateUsersChordsUseCase {
    async execute(data: UsersChords, userID: number) {
        try {
            const { chordsId } = data;
            const relacion = UsersChordsRepository.create({
                usersId: userID,
                chordsId: chordsId
            });
            await UsersChordsRepository.save(relacion);
            return relacion;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new CreateUsersChordsUseCase();