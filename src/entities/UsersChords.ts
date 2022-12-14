import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Chords } from "./Chords";
import { Users } from "./Users";

@Index("fk_users_has_chords_chords1_idx", ["chordsId"], {})
@Index("fk_users_has_chords_users_idx", ["usersId"], {})
@Entity("users_chords", { schema: "myjam_database" })
export class UsersChords {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "users_id" })
  usersId: number;

  @Column("int", { name: "chords_id" })
  chordsId: number;

  @Column("datetime", { name: "learnedAt", nullable: true })
  learnedAt: Date | null;

  @ManyToOne(() => Chords, (chords) => chords.usersChords, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "chords_id", referencedColumnName: "id" }])
  chords: Chords;

  @ManyToOne(() => Users, (users) => users.usersChords, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "users_id", referencedColumnName: "id" }])
  users: Users;
}
