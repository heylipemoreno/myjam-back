import constants from "../../../config/constants/constants";
import {ExperienceToModel} from "../helpers/ExperienceToModel";
import {ExperienceRepository} from "../repositories/ExperienceRepository";

export class ListIDExperienceUseCase{
    async execute(dataID: number){
        try {
            const experience=await ExperienceRepository.findOneBy({id:dataID});
            if (!experience) {
                return constants.CRUD.EXPERIENCE.NOT_FOUND;
            }
            return ExperienceToModel(experience);
        } catch (error) {
            console.log(error);
        }
    }
}

export default new ListIDExperienceUseCase();