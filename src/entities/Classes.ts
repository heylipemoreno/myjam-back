import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Chords } from "./Chords";
import { Lessons } from "./Lessons";
import { Songs } from "./Songs";

@Entity("classes", { schema: "myjam-database" })
export class Classes {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "classVideoLink", nullable: true, length: 255 })
  classVideoLink: string | null;

  @CreateDateColumn({ name: "createdAt" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @Column("datetime", { name: "completedAt", nullable: true })
  completedAt: Date | null;

  @ManyToMany(() => Chords, (chords) => chords.classes)
  chords: Chords[];

  @OneToMany(() => Lessons, (lessons) => lessons.classes)
  lessons: Lessons[];

  @OneToMany(() => Songs, (songs) => songs.classes)
  songs: Songs[];
}
