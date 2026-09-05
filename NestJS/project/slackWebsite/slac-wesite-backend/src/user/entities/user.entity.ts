import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BeforeInsert,
  OneToMany,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { MessageEntity } from '../../message/entity/message.entity.js';
import { WorkspaceMemberEntity } from '../../workspace/entity/workspace-member.entity.js';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column({ unique: true })
  username: string;

  @Column({ nullable: true })
  avatar: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  generateAvatar() {
    this.avatar = `https://robohash.org/${this.username}`;
  }
  @OneToMany(() => MessageEntity, (message) => message.user)
  messages: Relation<MessageEntity[]>;

  @OneToMany(
    () => WorkspaceMemberEntity,
    (workspaceMemeber) => workspaceMemeber.user,
  )
  workspaceMembers: WorkspaceMemberEntity;
}
