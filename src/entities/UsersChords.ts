import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Chords } from "./Chords";
import { Users } from "./Users";

@Index("fk_users_has_chords_chords1_idx", ["chordId"], {})
@Index("fk_users_has_chords_users1_idx", ["userId"], {})
@Entity("users_chords", { schema: "api-desafiochefao-grupo2" })
export class UsersChords {
  @Column("int", { primary: true, name: "userId" })
  userId: number;

  @Column("int", { primary: true, name: "chordId" })
  chordId: number;

  @Column("datetime", { name: "learnedAt" })
  learnedAt: Date;

  @ManyToOne(() => Chords, (chords) => chords.usersChords, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "chordId", referencedColumnName: "chordId" }])
  chord: Chords;

  @ManyToOne(() => Users, (users) => users.usersChords, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "userId" }])
  user: Users;
}
