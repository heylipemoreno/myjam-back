import {CommonRoutesConfig} from "../../common/routes/commonRoutes";
import express from 'express'
import songsChordsControllers from "../controllers/songsChordsControllers";

export class SongsChordsRoutes extends CommonRoutesConfig{
    constructor(app:express.Application){
        super(app,'Songs_Chords Routes')
    }

    configureRoutes():express.Application{
        this.app.route('/songs_chords')
            .get(songsChordsControllers.list)
            .post(songsChordsControllers.create)

        this.app.route('/songs_chords/:id')
            .get(songsChordsControllers.listID)
            .put(songsChordsControllers.update)
            .delete(songsChordsControllers.delete)

        return this.app;
    }
}