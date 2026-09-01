import { LikesEntity } from "../../likes/entity/likes.entity";
import { User } from "../../user/user.entity";
import { Entity, Column, CreateDateColumn, JoinColumn, UpdateDateColumn, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";

@Entity({ name: 'posts' })
export class Post {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  userId: number;

  @ManyToOne(() => User, (user) => user.posts, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'userId' })
  user: User;

  @OneToMany(() => LikesEntity, (like) => like.post)
  likes: LikesEntity[];


}