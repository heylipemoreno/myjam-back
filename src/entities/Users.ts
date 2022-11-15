import {
    Column,
    Entity,
    Index,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { Lessons } from "./Lessons";
  import { UsersChords } from "./UsersChords";
  import { Genres } from "./Genres";
  import { UsersSongs } from "./UsersSongs";
  
  @Index("email_UNIQUE", ["email"], { unique: true })
  @Entity("users", { schema: "api-desafiochefao-grupo2" })
  export class Users {
    @PrimaryGeneratedColumn({ type: "int", name: "userId" })
    userId: number;
  
    @Column("varchar", { name: "name", length: 70 })
    name: string;
  
    @Column("varchar", { name: "nickname", length: 20 })
    nickname: string;
  
    @Column("varchar", { name: "email", unique: true, length: 70 })
    email: string;
  
    @Column("varchar", { name: "password", length: 20 })
    password: string;
  
    @Column("int", { name: "age", nullable: true })
    age: number | null;
  
    @Column("int", { name: "totalPoints" })
    totalPoints: number;
  
    @Column("int", { name: "qntSongs", nullable: true })
    qntSongs: number | null;
  
    @Column("int", { name: "qtnChords", nullable: true })
    qtnChords: number | null;
  
    @OneToMany(() => Lessons, (lessons) => lessons.user)
    lessons: Lessons[];
  
    @OneToMany(() => UsersChords, (usersChords) => usersChords.user)
    usersChords: UsersChords[];
  
    @ManyToMany(() => Genres, (genres) => genres.users)
    genres: Genres[];
  
    @OneToMany(() => UsersSongs, (usersSongs) => usersSongs.user)
    usersSongs: UsersSongs[];
  }
  
