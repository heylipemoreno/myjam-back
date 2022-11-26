import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Songs } from "./Songs";
import { Users } from "./Users";

@Index("fk_users_songs_songs1_idx", ["songsId"], {})
@Index("fk_users_songs_users1_idx", ["usersId"], {})
@Entity("users_songs", { schema: "myjam_database" })
export class UsersSongs {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "users_id" })
  usersId: number;

  @Column("int", { name: "songs_id" })
  songsId: number;

  @Column("datetime", { name: "learnedAt", nullable: true })
  learnedAt: Date | null;

  @ManyToOne(() => Songs, (songs) => songs.usersSongs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "songs_id", referencedColumnName: "id" }])
  songs: Songs;

  @ManyToOne(() => Users, (users) => users.usersSongs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "users_id", referencedColumnName: "id" }])
  users: Users;
}
