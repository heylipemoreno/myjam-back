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
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "genreName", length: 45 })
  genreName: string;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @ManyToMany(() => Songs, (songs) => songs.genres)
  @JoinTable({
    name: "genres_songs",
    joinColumns: [{ name: "genres_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "songs_id", referencedColumnName: "id" }],
    schema: "api-desafiochefao-grupo2",
  })
  songs: Songs[];

  @ManyToMany(() => Users, (users) => users.genres)
  @JoinTable({
    name: "users_genres",
    joinColumns: [{ name: "genres_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "users_id", referencedColumnName: "id" }],
    schema: "api-desafiochefao-grupo2",
  })
  users: Users[];
}
