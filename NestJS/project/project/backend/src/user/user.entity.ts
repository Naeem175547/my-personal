import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { UserRole } from './types/user.enum'
import { Post } from '../post/entities/post.entity'
import { LikesEntity } from '../likes/entity/likes.entity'

@Entity({ name: "users" })
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({ unique: true })
    username: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @Column({ type: 'enum', enum: UserRole })
    role: UserRole

    @OneToMany(() => Post, (post) => post.user)
    posts: Post[];

    @OneToMany(() => LikesEntity, (like) => like.user)
    likes: LikesEntity[]

}



