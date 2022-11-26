import constants from "../../../config/constants/constants";
import{Style}from "../../../entities/Style";
import{StyleRepository}from "../repositories/StyleRepository";

export class UpdateStyleUseCase{
    async execute(data:Style,dataID:number){
        try{
            const{styleOption}=data
            const style=await StyleRepository.findOneBy({id:dataID});
            if(!style){
                return constants.CRUD.STYLE.NOT_FOUND;
            }
            const updated=await StyleRepository.update({id:dataID},{
                styleOption,
            })
            return constants.CRUD.STYLE.UPDATE;
        } catch(error){
            console.log(error);
        }
    }
}

export default new UpdateStyleUseCase();