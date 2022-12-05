import { secretKey } from "../../../config/secret/secret";
import jwt from 'jsonwebtoken';

interface IPayloadToken {
    id: number,
    iat: number,
    exp: number
}

export default function decodeToken(token: string) {
    const separatedToken = token.split(' ')[1]
    const decode = jwt.verify(separatedToken, secretKey)
    const id = (decode as IPayloadToken).id
    return id
}