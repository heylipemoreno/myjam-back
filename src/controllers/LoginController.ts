import { Request, Response } from "express";
import { UsersRepository } from "../repositories/UsersRepository";
import bcrypt from 'bcryptjs';
import * as jtw from 'jsonwebtoken';
import { secretKey } from "../config/secret/secret";
import constants from "../config/constants/constants";
import mail from "../services/mail/mail";

export class LoginController {
    async login(req: Request, res: Response) {
        const { email, password } = req.body;
        try {
            const user = await UsersRepository.findOneOrFail({
                where: { email }
            })
            if (!user) {
                res.status(404).send(constants.LOGIN.CONTROLLER.EMAIL_INCORRECT)
            }
            if (!bcrypt.compareSync(password, user.password)) {
                res.status(401).send(constants.LOGIN.CONTROLLER.PASSWORD_INCORRECT)
            }
            const token = jtw.sign({
                id: user.id
            }, secretKey, {
                expiresIn: '1 day'
            })
            res.status(200).send({
                User: user,
                Token: token
            })
        } catch (error) {
            console.log(error)
            res.status(500).send(constants.LOGIN.ERROR)
        }
    }

    async forgotPassword(req: Request, res: Response) {
        const { email } = req.body;
        try {
            const user = await UsersRepository.findOneOrFail({
                where: { email }
            })
            if (!user) {
                res.status(404).send('E-mail não cadastrado na aplicação.')
            }

            const token = jtw.sign({
                id: user.id
            }, secretKey, {
                expiresIn: '600000'
            })

            mail.sendMail(user.userName, user.email, 'recovery', token)

            res.status(200).send({
                Message: `E-mail enviado! Favor olhar na caixa de Spam ou Lixo Eletrônico.`
            })
        } catch (error) {
            console.log(error)
            res.status(500).send(constants.CRUD.ERROR)
        }
    }

    async recoverPassword(req: Request, res: Response) {
        const { password } = req.body
        const { id } = req.body.infoToken
        try {
            const user = await UsersRepository.findOneOrFail({
                where: { id }
            })
            await UsersRepository.update(id, { password })
            res.status(200).send({
                Message: 'Senha atualizada com sucesso!'
            })
        } catch (error) {
            console.log(error)
            res.status(500).send(constants.CRUD.ERROR)
        }
    }
}