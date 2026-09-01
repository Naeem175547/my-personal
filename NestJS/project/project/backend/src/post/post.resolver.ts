import { Resolver, Query, Mutation, Args, Int, Subscription } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './types/post.type';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { PostsResponse } from './types/post.type';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from '../common/guards/auth.guard';
import { PubSub } from "graphql-subscriptions";
const pubSub = new PubSub()
@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) { }

  @Mutation(() => Boolean)
  createPost(@Args('userId', { type: () => Int }) userId: number, @Args('createPostInput') createPostInput: CreatePostInput) {
    const result = this.postService.create(userId, createPostInput);
    return result;

  }

  
  @Query(() => PostsResponse)
  async posts(
    @Args("page", { type: () => Int, nullable: true }) page?: number,
    @Args("limit", { type: () => Int, nullable: true }) limit?: number,
  ) {
    return this.postService.findAll(page, limit);
  }
    
  @UseGuards(JwtGuard)
  @Query(() => Post, { nullable: true, name: "post" })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.postService.findOne(id);
  }

  @UseGuards(JwtGuard)
  @Mutation(() => Boolean)
  updatePostAdmin(@Args('id', { type: () => Int }) id: number, @Args('updatePostInput') updatePostInput: UpdatePostInput) {
    return this.postService.updateAdmin(id, updatePostInput);
  }
  @UseGuards(JwtGuard)
  @Mutation(() => Boolean)
  updatePostUser(@Args('userId', { type: () => Int }) userId: number, @Args('id', { type: () => Int }) id: number, @Args('updatePostInput') updatePostInput: UpdatePostInput) {
    return this.postService.updateUser(id, userId, updatePostInput);
  }


  @UseGuards(JwtGuard)
  @Mutation(() => Boolean)
  removePostAdmin(@Args('id', { type: () => Int }) id: number) {
    return this.postService.removeAdmin(id);
  }


  @UseGuards(JwtGuard)
  @Mutation(() => Boolean)
  removePostUser(@Args('userId', { type: () => Int }) userId: number, @Args('id', { type: () => Int }) id: number) {
    return this.postService.removeUser(userId, id);
  }

  @Subscription(() => Post)
  async newPost() {
    return await pubSub.asyncIterableIterator('newPost')

  }
}
