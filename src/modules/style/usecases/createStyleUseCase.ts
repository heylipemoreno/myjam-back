import{Style}from "../../../entities/Style";
import{StyleToModel}from "../helpers/StyleToModel";
import{StyleRepository}from "../repositories/StyleRepository";

export class CreateStyleUseCase{
    async execute(data:Style){
        try {
            const {styleOption}=data
            const newStyle=StyleRepository.create({styleOption});
            await StyleRepository.save(newStyle);
            return StyleToModel(newStyle);
        } catch(error){
            console.log(error);
        }
    }
}

export default new CreateStyleUseCase();