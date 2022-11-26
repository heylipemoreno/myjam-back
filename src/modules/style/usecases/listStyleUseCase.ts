import{StyleToModel}from "../helpers/StyleToModel";
import{StyleRepository}from "../repositories/StyleRepository";

export class ListStyleUseCase{
    async execute(){
        try{
            const list=await StyleRepository.find()
            const listStyle=list.map(StyleToModel)
            return listStyle
        }catch (error){
            console.log(error)
        }
    }
}

export default new ListStyleUseCase();