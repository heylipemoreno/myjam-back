import { error } from 'console';
import * as nodemailer from 'nodemailer';
import { welcomeMail } from '../../viewes/welcomeMail';

class Mail {


    sendMail(userEmail: string, userName: string,) {
        let mailContent = {
            from: process.env.MAIL_EMAIL,
            to: userEmail,
            subject: 'Implementação de serviço e teste de Bem Vindo!',
            text: 'Testando envio FORA SPAM',
            html: welcomeMail(userName)
        }

        const transporter = nodemailer.createTransport({
            service: 'Hotmail',
            auth: {
                user: process.env.MAIL_EMAIL,
                pass: process.env.MAIL_PASSWORD
            }
        })

        transporter.sendMail(mailContent, (err, result) => {
            if (err) {
                console.log(err)
            }
            console.log(result)
        })
    }
}

export default new Mail();