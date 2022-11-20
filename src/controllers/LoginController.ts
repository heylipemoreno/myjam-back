import { Request, Response } from "express";
import { UsersRepository } from "../repositories/UsersRepository";
import bcrypt from 'bcryptjs';
import * as jtw from 'jsonwebtoken';
import { secretKey } from "../config/secret/secret";
import constants from "../config/constants/constants";

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
                id: user.id,
                userName: user.userName,
                qtdSongs: user.qtdSongs,
                qtdChords: user.qtdChords
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
}