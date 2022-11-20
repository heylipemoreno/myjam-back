import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Lessons } from "./Lessons";
import { Songs } from "./Songs";
import { UsersClasses } from "./UsersClasses";

@Index("fk_classes_lessons1_idx", ["lessonsId"], {})
@Entity("classes", { schema: "myjam_database" })
export class Classes {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "classeName", length: 100 })
  classeName: string;

  @CreateDateColumn({ name: "createdAt" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updatedAt" })
  updatedAt: Date;

  @Column("int", { name: "lessons_id" })
  lessonsId: number;

  @ManyToOne(() => Lessons, (lessons) => lessons.classes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "lessons_id", referencedColumnName: "id" }])
  lessons: Lessons;

  @OneToMany(() => Songs, (songs) => songs.classes)
  songs: Songs[];

  @OneToMany(() => UsersClasses, (usersClasses) => usersClasses.classes)
  usersClasses: UsersClasses[];
}
