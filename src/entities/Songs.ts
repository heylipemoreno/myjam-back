import {
    Column,
    Entity,
    Index,
    ManyToMany,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { Classes } from "./Classes";
  import { Genres } from "./Genres";
  import { Chords } from "./Chords";
  import { UsersSongs } from "./UsersSongs";
  
  @Index("videoLink_UNIQUE", ["songVideoLink"], { unique: true })
  @Index("songContentLink_UNIQUE", ["songContentLink"], { unique: true })
  @Entity("songs", { schema: "api-desafiochefao-grupo2" })
  export class Songs {
    @PrimaryGeneratedColumn({ type: "int", name: "songId" })
    songId: number;
  
    @Column("int", { primary: true, name: "classId" })
    classId: number;
  
    @Column("varchar", { name: "songName", length: 255 })
    songName: string;
  
    @Column("varchar", { name: "songVideoLink", unique: true, length: 255 })
    songVideoLink: string;
  
    @Column("varchar", { name: "songContentLink", unique: true, length: 255 })
    songContentLink: string;
  
    @OneToOne(() => Classes, (classes) => classes.songs)
    classes: Classes;
  
    @ManyToMany(() => Genres, (genres) => genres.songs)
    genres: Genres[];
  
    @ManyToMany(() => Chords, (chords) => chords.songs)
    chords: Chords[];
  
    @OneToMany(() => UsersSongs, (usersSongs) => usersSongs.song)
    usersSongs: UsersSongs[];
  }
  
