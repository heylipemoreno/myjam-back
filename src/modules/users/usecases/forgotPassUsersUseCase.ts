import mail from "../../../utils/mail/mail"
import { JWTokenGenerate } from "../helpers/JWTokenGenerate"
import { UsersRepository } from "../repositories/UsersRepository"

export class ForgotPasswordUsersUseCase {
    async execute(email: string) {
        try {
            const user = await UsersRepository.findOneOrFail({
                where: { email }
            })
            if (!user) {
                return 'E-mail não cadastrado na aplicação.'
            }
            const token = JWTokenGenerate(user.id, '600000')
            mail.sendMail(user.userName, user.email, 'recover', token)
            return 'E-mail enviado! Favor olhar na caixa de Spam ou Lixo Eletrônico.'
        } catch (error) {
            console.log(error)
        }
    }
}

export default new ForgotPasswordUsersUseCase()