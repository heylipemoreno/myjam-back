import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Chords } from "./Chords";
import { Lessons } from "./Lessons";
import { Songs } from "./Songs";

@Entity("classes", { schema: "api-desafiochefao-grupo2" })
export class Classes {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "classVideoLink", nullable: true, length: 255 })
  classVideoLink: string | null;

  @Column("datetime", { name: "createdAt", default: () => 'NOW()' })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @ManyToMany(() => Chords, (chords) => chords.classes)
  chords: Chords[];

  @OneToMany(() => Lessons, (lessons) => lessons.classes)
  lessons: Lessons[];

  @OneToMany(() => Songs, (songs) => songs.classes)
  songs: Songs[];
}
