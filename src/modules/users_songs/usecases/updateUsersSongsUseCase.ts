import { UsersSongs } from "../../../entities/UsersSongs";
import { UsersSongsRepository } from "../repositories/usersSongsRepositories";

export class UpdateUsersSongsUseCase {
    async execute(songID: number, userID: number) {
        try {
            const relacion = await UsersSongsRepository.findOneBy({
                usersId: userID,
                songsId: songID
            })
            if (!relacion) {
                return 'Nao foi possivel encontrar a relação [Users_Songs]'
            }
            await UsersSongsRepository.update({ id: relacion.id }, {
                learnedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
            })
            return 'Tabela de relação atualizada com sucesso.'
        } catch (error) {
            console.log(error)
        }
    }
}

export default new UpdateUsersSongsUseCase()