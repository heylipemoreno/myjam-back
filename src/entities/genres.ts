import { Songs } from "./songs";

import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    ManyToOne,
    JoinColumn
} from "typeorm";

@Entity('levels')
export class Levels {
    @PrimaryGeneratedColumn()
    songId: number;

    @Column({ unique: true })
    videoLink: string;

    @Column({ unique: true })
    songContentLink: string;

    @ManyToOne(() => Genres, genres => genres.songId)
    @JoinColumn({ name: 'musicTypeId' })
    musicTypeId: genres[];
}
