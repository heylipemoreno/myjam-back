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
  import { Questions } from "./Questions";
  
  @Index("fk_classes_has_users_users1_idx", ["userId"], {})
  @Index("fk_classes_has_users_classes1_idx", ["lessonId", "classId"], {})
  @Index("fk_lessons_questions1_idx", ["questionId"], {})
  @Entity("lessons", { schema: "api-desafiochefao-grupo2" })
  export class Lessons {
    @PrimaryGeneratedColumn({ type: "int", name: "lessonId" })
    lessonId: number;
  
    @Column("int", { primary: true, name: "classId" })
    classId: number;
  
    @Column("int", { primary: true, name: "userId" })
    userId: number;
  
    @Column("datetime", { name: "completedAt", nullable: true })
    completedAt: Date | null;
  
    @Column("int", { name: "points" })
    points: number;
  
    @Column("int", { primary: true, name: "questionId" })
    questionId: number;
  
    @ManyToOne(() => Classes, (classes) => classes.lessons, {
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    })
    @JoinColumn([
      { name: "classId", referencedColumnName: "classId" },
      { name: "lessonId", referencedColumnName: "songId" },
    ])
    classes: Classes;
  
    @ManyToOne(() => Users, (users) => users.lessons, {
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    })
    @JoinColumn([{ name: "userId", referencedColumnName: "userId" }])
    user: Users;
  
    @ManyToOne(() => Questions, (questions) => questions.lessons, {
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    })
    @JoinColumn([{ name: "questionId", referencedColumnName: "questionId" }])
    question: Questions;
  }
