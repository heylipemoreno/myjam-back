import { UsersChords } from "../../../entities/UsersChords";
import { UsersChordsRepository } from "../repositories/UsersChordsRepository";

export class UpdateUsersChordsUseCase {
    async execute(data:UsersChords, userID: number) {
        try {
            const relacion = await UsersChordsRepository.findOneBy({
                usersId: userID,
                chordsId: data.chordsId
            })
            if (!relacion) {
                return 'Tabela de relação [Users => Chords] não encontrada.'
            }
            const updated = await UsersChordsRepository.update({ id: relacion.id }, {
                learnedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
            })
            return 'Tabela de relação [Users => Chords] atualizada com sucesso.'
        } catch (error) {
            console.log(error)
        }
    }
}

export default new UpdateUsersChordsUseCase()