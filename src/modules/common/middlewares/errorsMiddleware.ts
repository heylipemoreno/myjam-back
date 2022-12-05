import express from 'express'
import constants from '../../../config/constants/constants';


export default (error: express.ErrorRequestHandler, request: express.Request, response: express.Response, next: express.NextFunction) => {
    if (error.name === constants.ERROR.TYPE.UNAUTHORIZED_ERROR) {
        response.status(401).send({ error: constants.ERROR.MESSAGE.UNAUTHORIZED });
    }

    if (error.name === constants.ERROR.TYPE.VALIDATION_ERROR) {
        response.status(400).send({ error: constants.ERROR.MESSAGE.VALIDATION, desc: error })
    }
}