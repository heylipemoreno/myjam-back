import { secretKey } from "../../../config/secret/secret";
import express from 'express';
import jwt from 'jsonwebtoken';
import constants from '../../../config/constants/constants';

export const Auth = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    try {
        const token = request.header('Authorization')?.split(' ')[1]
        if (!token) {
            response.status(401).send(constants.LOGIN.MESSAGE.ABSENT);
        } else {
            const decode = jwt.verify(token, secretKey)
            if (typeof decode === 'string') {
                response.status(401).send(constants.LOGIN.MESSAGE.PROCESS_ERROR);
            } else {
                next();
            }
        }
    } catch (error) {
        console.log(error)
        response.status(401).send(constants.LOGIN.MESSAGE.ERROR);
    }
}