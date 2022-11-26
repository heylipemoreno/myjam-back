import { UsersSongsRepository } from "../repositories/usersSongsRepositories";

export class DeleteUsersSongsUseCase{
    async execute(dataID:number){
        try {
            const deleted = await UsersSongsRepository.delete({id:dataID})
            return deleted
        } catch (error) {
            console.log(error)
        }
    }
}

export default new DeleteUsersSongsUseCase()