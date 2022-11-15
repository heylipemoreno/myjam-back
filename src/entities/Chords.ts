import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { Classes } from "./Classes";
  import { Songs } from "./Songs";
  import { UsersChords } from "./UsersChords";
  
  @Entity("chords", { schema: "api-desafiochefao-grupo2" })
  export class Chords {
    @PrimaryGeneratedColumn({ type: "int", name: "chordId" })
    chordId: number;
  
    @Column("varchar", { name: "chordName", length: 45 })
    chordName: string;
  
    @ManyToMany(() => Classes, (classes) => classes.chords)
    @JoinTable({
      name: "chords_classes",
      joinColumns: [{ name: "chordId", referencedColumnName: "chordId" }],
      inverseJoinColumns: [{ name: "classId", referencedColumnName: "classId" }],
      schema: "api-desafiochefao-grupo2",
    })
    classes: Classes[];
  
    @ManyToMany(() => Songs, (songs) => songs.chords)
    @JoinTable({
      name: "songs_chords",
      joinColumns: [{ name: "chordId", referencedColumnName: "chordId" }],
      inverseJoinColumns: [{ name: "songId", referencedColumnName: "songId" }],
      schema: "api-desafiochefao-grupo2",
    })
    songs: Songs[];
  
    @OneToMany(() => UsersChords, (usersChords) => usersChords.chord)
    usersChords: UsersChords[];
  }
  