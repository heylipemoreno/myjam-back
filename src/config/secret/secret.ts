import { Secret } from "jsonwebtoken"

export const secretKey: Secret = String(process.env.SECRET_KEY);