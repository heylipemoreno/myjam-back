import{Style}from "../../../entities/Style";

export function StyleToModel(data:Style){
    if (!data){
        return
    }

    const style={
        id:data.id,
        styleOption:data.styleOption,
    }

    return style;
}