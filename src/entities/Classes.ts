import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Lessons } from "./Lessons";
import { Songs } from "./Songs";
import { Users } from "./Users";

@Entity("classes", { schema: "myjam-database" })
export class Classes {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "className", length: 45 })
  className: string;

  @CreateDateColumn({ name: "createdAt" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @Column("datetime", { name: "completedAt", nullable: true })
  completedAt: Date | null;

  @OneToMany(() => Lessons, (lessons) => lessons.classes)
  lessons: Lessons[];

  @OneToMany(() => Songs, (songs) => songs.classes)
  songs: Songs[];

  @ManyToMany(() => Users, (users) => users.classes)
  @JoinTable({
    name: "users_classes",
    joinColumns: [{ name: "classes_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "users_id", referencedColumnName: "id" }],
    schema: "myjam-database",
  })
  users: Users[];
}
