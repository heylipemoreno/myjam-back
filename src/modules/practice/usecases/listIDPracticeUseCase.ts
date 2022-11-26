import constants from "../../../config/constants/constants";
import { PracticeToModel } from "../helpers/PracticeToModel";
import { PracticeRepository } from "../repositories/PracticeRepository";

export class ListIDPracticeUseCase{
    async execute(dataID: number){
        try {
            const practice=await PracticeRepository.findOneBy({id:dataID});
            if (!practice) {
                return constants.CRUD.PRACTICE.NOT_FOUND;
            }
            return PracticeToModel(practice);
        } catch (error) {
            console.log(error);
        }
    }
}

export default new ListIDPracticeUseCase();