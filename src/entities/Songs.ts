import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { GenresSongs } from "./GenresSongs";
import { Classes } from "./Classes";
import { SongsChords } from "./SongsChords";

@Index("fk_songs_classes1_idx", ["classesId"], {})
@Entity("songs", { schema: "myjam_database" })
export class Songs {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "songName", length: 255 })
  songName: string;

  @Column("varchar", { name: "songVideoLink", nullable: true, length: 255 })
  songVideoLink: string | null;

  @Column("varchar", { name: "songContentLink", nullable: true, length: 255 })
  songContentLink: string | null;

  @Column("int", { name: "classes_id" })
  classesId: number;
  
  @CreateDateColumn({ name: "createdAt" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updatedAt" })
  updatedAt: Date;

  @OneToMany(() => GenresSongs, (genresSongs) => genresSongs.songs)
  genresSongs: GenresSongs[];

  @ManyToOne(() => Classes, (classes) => classes.songs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "classes_id", referencedColumnName: "id" }])
  classes: Classes;

  @OneToMany(() => SongsChords, (songsChords) => songsChords.songs)
  songsChords: SongsChords[];
}
