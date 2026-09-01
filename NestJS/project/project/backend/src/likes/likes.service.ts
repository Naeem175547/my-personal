import {
    ConflictException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LikesEntity } from './entity/likes.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LikesService {
    constructor(
        @InjectRepository(LikesEntity)
        private readonly repo: Repository<LikesEntity>,
    ) { }

    async addLike(userId: number, postId: number) {
        try {
            const result = await this.repo.insert({
                user_id: userId,
                post_id: postId,
            });
            return result.identifiers.length > 0;
        } catch (error: any) {

            if (error.code === 'ER_DUP_ENTRY') {
                throw new ConflictException('Post already liked');
            }

            throw error;
        }
    }

    async removeLike(userId: number, postId: number) {
        try {
            const result = await this.repo.delete({
                user_id: userId,
                post_id: postId,
            });

            if (result.affected === 0) {
                throw new NotFoundException('Like does not exist');
            }

            return true;
        } catch (error) {
            throw error
        }
    }
    async getAllLikes() {
        return await this.repo.find();
    }
}