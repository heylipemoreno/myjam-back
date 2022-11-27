import { UsersChordsRepository } from "../repositories/UsersChordsRepository";

export class ListIDAllUsersChordsUseCase{
    async execute(dataID:number){
        try {
            const list = await UsersChordsRepository.findBy({
                usersId:dataID
            })
            return list
        } catch (error) {
            console.log(error)
        }
    }
}

export default new ListIDAllUsersChordsUseCase()