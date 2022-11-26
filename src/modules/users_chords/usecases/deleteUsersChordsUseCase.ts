import {UsersChordsRepository} from "../repositories/UsersChordsRepository";

export class DeleteUsersChordsUseCase{
    async execute(dataID:number){
        try{
            const deleted=await UsersChordsRepository.delete({id: dataID});
            return deleted;
        } catch(error){
            console.log(error);
        }
    }
}

export default new DeleteUsersChordsUseCase();