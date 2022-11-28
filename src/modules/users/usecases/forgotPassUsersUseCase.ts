import mail from "../../../utils/mail/mail"
import { JWTokenGenerate } from "../helpers/JWTokenGenerate"
import { UsersRepository } from "../repositories/usersRepository"

export class ForgotPasswordUsersUseCase {
    async execute(email: string) {
        try {
            const user = await UsersRepository.findOneBy({
                email: email
            })
            if (!user) {
                return 
            }
            const token = JWTokenGenerate(user.id, '600000')
            mail.sendMail(user.userName, user.email, 'recover', token)
            return 'E-mail enviado! Pode ter caido na caixa de spam ou no lixo eletrônico.'
        } catch (error) {
            console.log(error)
        }
    }
}

export default new ForgotPasswordUsersUseCase()