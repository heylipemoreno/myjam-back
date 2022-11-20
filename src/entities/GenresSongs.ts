import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Genres } from "./Genres";
import { Songs } from "./Songs";

@Index("fk_songs_has_genres_genres1_idx", ["genresId"], {})
@Index("fk_songs_has_genres_songs1_idx", ["songsId"], {})
@Entity("genres_songs", { schema: "myjam_database" })
export class GenresSongs {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "genres_id" })
  genresId: number;

  @Column("int", { name: "songs_id" })
  songsId: number;

  @ManyToOne(() => Genres, (genres) => genres.genresSongs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "genres_id", referencedColumnName: "id" }])
  genres: Genres;

  @ManyToOne(() => Songs, (songs) => songs.genresSongs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "songs_id", referencedColumnName: "id" }])
  songs: Songs;
}
