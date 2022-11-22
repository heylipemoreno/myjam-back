import * as nodemailer from 'nodemailer';
import { recoverPassword } from '../../viewes/recoveryPassMail';
import { welcomeMail } from '../../viewes/welcomeMail';

class Mail {

    sendMail(userName: string, userEmail: string, type: string, token?: string) {
        let content, subject;

        if (!token) {
            token = ''
        }

        switch (type) {
            case 'welcome':
                content = welcomeMail(userName);
                subject = `Bem Vindo, ${userName}.`;
                break;
            case 'recovery':
                content = recoverPassword(userName, token);
                subject = `Recuperar a senha.`
                break;
            default:
                break;
        }

        const mailContent = {
            from: process.env.MAIL_EMAIL,
            to: userEmail,
            subject: subject,
            text: 'Testando envio FORA SPAM',
            html: content
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