import bcrypt from 'bcryptjs'

export function cryptPassGenerate(pass: string) {
    const cryptPass = bcrypt.hashSync(pass, 10)
    return cryptPass
}