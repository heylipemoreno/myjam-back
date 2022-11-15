import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Songs } from "./Songs";
import { Users } from "./Users";

@Entity("genres", { schema: "api-desafiochefao-grupo2" })
export class Genres {
  @PrimaryGeneratedColumn({ type: "int", name: "genreId" })
  genreId: number;

  @Column("varchar", { name: "genreName", length: 45 })
  genreName: string;

  @ManyToMany(() => Songs, (songs) => songs.genres)
  @JoinTable({
    name: "genres_songs",
    joinColumns: [{ name: "genreId", referencedColumnName: "genreId" }],
    inverseJoinColumns: [{ name: "songId", referencedColumnName: "songId" }],
    schema: "api-desafiochefao-grupo2",
  })
  songs: Songs[];

  @ManyToMany(() => Users, (users) => users.genres)
  @JoinTable({
    name: "users_genres",
    joinColumns: [{ name: "genreId", referencedColumnName: "genreId" }],
    inverseJoinColumns: [{ name: "userId", referencedColumnName: "userId" }],
    schema: "api-desafiochefao-grupo2",
  })
  users: Users[];
}
