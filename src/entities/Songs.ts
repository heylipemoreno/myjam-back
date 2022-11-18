import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Genres } from "./Genres";
import { Classes } from "./Classes";
import { Chords } from "./Chords";

@Index("fk_songs_classes1_idx", ["classesId"], {})
@Entity("songs", { schema: "myjam-database" })
export class Songs {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "songName", length: 255 })
  songName: string;

  @Column("varchar", { name: "songVideoLink", nullable: true, length: 255 })
  songVideoLink: string | null;

  @Column("varchar", { name: "songContentLink", nullable: true, length: 255 })
  songContentLink: string | null;

  @Column("int", { primary: true, name: "classes_id" })
  classesId: number;

  @CreateDateColumn({ name: "createdAt" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @ManyToMany(() => Genres, (genres) => genres.songs)
  genres: Genres[];

  @ManyToOne(() => Classes, (classes) => classes.songs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "classes_id", referencedColumnName: "id" }])
  classes: Classes;

  @ManyToMany(() => Chords, (chords) => chords.songs)
  chords: Chords[];
}
