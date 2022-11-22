import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Lessons } from "./Lessons";
import { Users } from "./Users";

@Index("fk_users_classes_lessons1_idx", ["lessonsId"], {})
@Index("fk_users_has_classes_users1_idx", ["usersId"], {})
@Entity("users_lessons", { schema: "myjam_database" })
export class UsersLessons {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "users_id" })
  usersId: number;

  @Column("int", { name: "lessons_id" })
  lessonsId: number;

  @Column("datetime", { name: "completedAt", nullable: true })
  completedAt: Date | null;

  @Column("int", { name: "points", nullable: true, default: () => "'100'" })
  points: number | null;

  @ManyToOne(() => Lessons, (lessons) => lessons.usersLessons, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "lessons_id", referencedColumnName: "id" }])
  lessons: Lessons;

  @ManyToOne(() => Users, (users) => users.usersLessons, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "users_id", referencedColumnName: "id" }])
  users: Users;
}
