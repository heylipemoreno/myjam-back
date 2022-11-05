import { Levels } from "./levels";

import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn
} from "typeorm";

@Entity('users')
export class Users {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column()
    name: string;

    @Column({ unique: true })
    nickname: string;

    @Column({ unique: true })
    email: string;

    @Column()  
    password: string;

    @Column({ nullable: true })
    age: number;

    @Column({ nullable: true })
    experience: number;

    @Column({ nullable: true })
    userMusicType: number;

    @ManyToOne(() => Levels, levels => levels.userId)
    @JoinColumn({ name: 'levelId' })
    levelId: Levels[];
}
