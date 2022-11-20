import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Classes } from "./Classes";
import { Users } from "./Users";

@Index("fk_users_has_classes_classes1_idx", ["classesId"], {})
@Index("fk_users_has_classes_users1_idx", ["usersId"], {})
@Entity("users_classes", { schema: "myjam_database" })
export class UsersClasses {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "users_id" })
  usersId: number;

  @Column("int", { name: "classes_id" })
  classesId: number;

  @Column("datetime", { name: "completedAt", nullable: true })
  completedAt: Date | null;

  @Column("int", { name: "points", nullable: true, default: () => "'100'" })
  points: number | null;

  @ManyToOne(() => Classes, (classes) => classes.usersClasses, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "classes_id", referencedColumnName: "id" }])
  classes: Classes;

  @ManyToOne(() => Users, (users) => users.usersClasses, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "users_id", referencedColumnName: "id" }])
  users: Users;
}
