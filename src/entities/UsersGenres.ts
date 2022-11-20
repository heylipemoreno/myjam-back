import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Genres } from "./Genres";
import { Users } from "./Users";

@Index("fk_users_has_genres_genres1_idx", ["genresId"], {})
@Index("fk_users_has_genres_users1_idx", ["usersId"], {})
@Entity("users_genres", { schema: "myjam_database" })
export class UsersGenres {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "users_id" })
  usersId: number;

  @Column("int", { name: "genres_id" })
  genresId: number;

  @ManyToOne(() => Genres, (genres) => genres.usersGenres, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "genres_id", referencedColumnName: "id" }])
  genres: Genres;

  @ManyToOne(() => Users, (users) => users.usersGenres, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "users_id", referencedColumnName: "id" }])
  users: Users;
}
