import constants from "../../../config/constants/constants";
import {StyleToModel} from "../helpers/StyleToModel";
import {StyleRepository} from "../repositories/StyleRepository";

export class ListIDStyleUseCase{
    async execute(dataID: number){
        try {
            const style=await StyleRepository.findOneBy({id:dataID});
            if (!style) {
                return 
            }
            return StyleToModel(style);
        } catch (error) {
            console.log(error);
        }
    }
}

export default new ListIDStyleUseCase();