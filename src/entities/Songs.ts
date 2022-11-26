import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { GenresSongs } from "./GenresSongs";
import { Questions } from "./Questions";
import { SongsChords } from "./SongsChords";
import { UsersSongs } from "./UsersSongs";

@Entity("songs", { schema: "myjam_database" })
export class Songs {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "songName", length: 100 })
  songName: string;

  @Column("varchar", { name: "songLink", nullable: true, length: 300 })
  songLink: string | null;

  @Column("text", { name: "songContent" })
  songContent: string;

  @CreateDateColumn({ name: "createdAt" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updatedAt" })
  updatedAt: Date;

  @OneToMany(() => GenresSongs, (genresSongs) => genresSongs.songs)
  genresSongs: GenresSongs[];

  @OneToMany(() => Questions, (questions) => questions.songs)
  questions: Questions[];

  @OneToMany(() => SongsChords, (songsChords) => songsChords.songs)
  songsChords: SongsChords[];

  @OneToMany(() => UsersSongs, (usersSongs) => usersSongs.songs)
  usersSongs: UsersSongs[];
}
