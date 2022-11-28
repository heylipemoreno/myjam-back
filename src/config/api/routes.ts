import express from 'express'

import { CommonRoutesConfig } from '../../modules/common/routes/commonRoutes'
import { TestRoutes } from '../../modules/common/routes/testRoutes'
import { ChordsRoutes } from '../../modules/chords/routes/chordsRoutes';
import { ExperienceRoutes } from '../../modules/experience/routes/experienceRoutes';
import { GenresRoutes } from '../../modules/genres/routes/genresRoutes';
import { InstrumentRoutes } from '../../modules/instrument/routes/instrumentRoutes';
import { LearnRoutes } from '../../modules/learn/routes/learnRoutes';
import { LessonsRoutes } from '../../modules/lessons/routes/lessonsRoutes';
import { PracticeRoutes } from '../../modules/practice/routes/practiceRoutes';
import { QuestionsRoutes } from '../../modules/questions/routes/questionsRoutes';
import { SongsRoutes } from '../../modules/songs/routes/songsRoutes';
import { StyleRoutes } from '../../modules/style/routes/styleRoutes';
import { UsersLessonsRoutes } from '../../modules/users_lessons/routes/usersLessonsRoutes';
import { UsersSongsRoutes } from '../../modules/users_songs/routes/usersSongsRoutes';
import { UsersQuestionsRoutes } from '../../modules/users_questions/routes/usersQuestionsRoutes';
import { UsersChordsRoutes } from '../../modules/users_chords/routes/usersChordsRoutes';
import { UsersRoutes } from '../../modules/users/routes/usersRoutes';
import { GenresSongsRoutes } from '../../modules/genres_songs/routes/genresSongsRoutes';
import { SongsChordsRoutes } from '../../modules/songs_chords/routes/songsChordsRoutes'

const routes: CommonRoutesConfig[] = []
const app: express.Application = express();

routes.push(new TestRoutes(app))
routes.push(new ChordsRoutes(app))
routes.push(new ExperienceRoutes(app))
routes.push(new GenresRoutes(app))
routes.push(new InstrumentRoutes(app))
routes.push(new LearnRoutes(app))
routes.push(new LessonsRoutes(app))
routes.push(new PracticeRoutes(app))
routes.push(new QuestionsRoutes(app))
routes.push(new SongsRoutes(app))
routes.push(new StyleRoutes(app))
routes.push(new UsersLessonsRoutes(app))
routes.push(new UsersSongsRoutes(app))
routes.push(new UsersQuestionsRoutes(app))
routes.push(new UsersChordsRoutes(app))
routes.push(new UsersRoutes(app))
routes.push(new GenresSongsRoutes(app))
routes.push(new SongsChordsRoutes(app))

export default routes;