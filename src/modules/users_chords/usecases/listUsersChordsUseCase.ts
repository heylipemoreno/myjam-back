import {UsersChordsRepository} from "../repositories/UsersChordsRepository";

export class ListUsersChordsUseCase{
    async execute(){
        try{
            const list=await UsersChordsRepository.find();
            return list;
        }catch(error){
            console.log(error);
        }
    }
}

export default new ListUsersChordsUseCase();