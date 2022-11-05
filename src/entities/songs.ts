import { Genres } from "./genres";
import { Levels } from "./levels";

import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    ManyToOne,
    JoinColumn
} from "typeorm";

@Entity('songs')
export class Songs {
    @PrimaryGeneratedColumn()
    songId: number;

    @Column({ unique: true })
    videoLink: string;

    @Column({ unique: true })
    songContentLink: string;

    @ManyToOne(() => Genres, genres => genres.songId)
    @JoinColumn({ name: 'musicTypeId' })
    musicTypeId: genres[];

    @ManyToOne(() => Levels, levels => levels.songId)
    @JoinColumn({ name: 'musicTypeId' })
    levelId: levels[];
}
