import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Songs } from "./Songs";
import { Users } from "./Users";

@Index("fk_users_has_songs_songs1_idx", ["songId"], {})
@Index("fk_users_has_songs_users1_idx", ["userId"], {})
@Entity("users_songs", { schema: "api-desafiochefao-grupo2" })
export class UsersSongs {
  @Column("int", { primary: true, name: "userId" })
  userId: number;

  @Column("int", { primary: true, name: "songId" })
  songId: number;

  @Column("datetime", { name: "learnedAt" })
  learnedAt: Date;

  @ManyToOne(() => Songs, (songs) => songs.usersSongs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "songId", referencedColumnName: "songId" }])
  song: Songs;

  @ManyToOne(() => Users, (users) => users.usersSongs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "userId" }])
  user: Users;
}
