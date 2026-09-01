import {
    Args,
    Int,
    Mutation,
    Query,
    Resolver,
} from '@nestjs/graphql';

import { LikesService } from './likes.service';
import { Like } from './types/like.type';

@Resolver()
export class LikesResolver {
    constructor(
        private likeService: LikesService,
    ) { }

    @Mutation(() => Boolean)
    addLikes(
        @Args('user_id', { type: () => Int })
        userId: number,

        @Args('post_id', { type: () => Int })
        postId: number,
    ) {
        return this.likeService.addLike(userId, postId);
    }

    @Mutation(() => Boolean)
    removeLikes(
        @Args('user_id', { type: () => Int })
        userId: number,

        @Args('post_id', { type: () => Int })
        postId: number,
    ) {
        return this.likeService.removeLike(userId, postId);
    }

    @Query(() => [Like])
    getLikes() {
        return this.likeService.getAllLikes();
    }
}