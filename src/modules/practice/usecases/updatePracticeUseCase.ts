import constants from "../../../config/constants/constants";
import{Practice}from "../../../entities/Practice";
import{PracticeRepository}from "../repositories/PracticeRepository";

export class UpdatePracticeUseCase{
    async execute(data:Practice,dataID:number){
        try{
            const{practiceOption}=data
            const practice=await PracticeRepository.findOneBy({id:dataID});
            if(!practice){
                return 
            }
            const updated=await PracticeRepository.update({id:dataID},{
                practiceOption,
            })
            return constants.CRUD.PRACTICE.UPDATE;
        } catch(error){
            console.log(error);
        }
    }
}

export default new UpdatePracticeUseCase();