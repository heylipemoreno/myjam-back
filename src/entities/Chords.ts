import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Classes } from "./Classes";
import { Songs } from "./Songs";
import { UsersChords } from "./UsersChords";

@Entity("chords", { schema: "myjam-database" })
export class Chords {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "chordName", length: 45 })
  chordName: string;

  @CreateDateColumn({ name: "createdAt" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @ManyToMany(() => Classes, (classes) => classes.chords)
  @JoinTable({
    name: "chords_classes",
    joinColumns: [{ name: "chords_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "classes_id", referencedColumnName: "id" }],
    schema: "myjam-database",
  })
  classes: Classes[];

  @ManyToMany(() => Songs, (songs) => songs.chords)
  @JoinTable({
    name: "songs_chords",
    joinColumns: [{ name: "chords_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "songs_id", referencedColumnName: "id" }],
    schema: "myjam-database",
  })
  songs: Songs[];

  @OneToMany(() => UsersChords, (usersChords) => usersChords.chords)
  usersChords: UsersChords[];
}
