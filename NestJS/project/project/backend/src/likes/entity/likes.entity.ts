import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Post } from '../../post/entities/post.entity';
import { User } from '../../user/user.entity';

@Entity('likes')
export class LikesEntity {
    @PrimaryColumn()
    user_id: number;

    @PrimaryColumn()
    post_id: number;

    @ManyToOne(() => User, (user) => user.likes, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Post, (post) => post.likes, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'post_id' })
    post: Post;
}