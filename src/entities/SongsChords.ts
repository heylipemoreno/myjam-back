import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Chords } from "./Chords";
import { Songs } from "./Songs";

@Index("fk_songs_has_chords_songs1_idx", ["songsId"], {})
@Index("fk_songs_chords_chords1_idx", ["chordsId"], {})
@Entity("songs_chords", { schema: "myjam_database" })
export class SongsChords {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "songs_id" })
  songsId: number;

  @Column("int", { name: "chords_id" })
  chordsId: number;

  @ManyToOne(() => Chords, (chords) => chords.songsChords, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "chords_id", referencedColumnName: "id" }])
  chords: Chords;

  @ManyToOne(() => Songs, (songs) => songs.songsChords, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "songs_id", referencedColumnName: "id" }])
  songs: Songs;
}
