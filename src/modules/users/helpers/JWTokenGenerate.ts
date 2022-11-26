import * as jtw from 'jsonwebtoken';
import { secretKey } from '../../../config/secret/secret';

export function JWTokenGenerate(dataID: number, time?: string) {
    if(!time){
        time = '3 day'
    }
    
    const token = jtw.sign({
        id: dataID
    }, secretKey, {
        expiresIn: time
    })

    return token;
}