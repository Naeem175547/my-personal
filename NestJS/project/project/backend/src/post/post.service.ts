import { Injectable, UseGuards, UseInterceptors } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm/browser/repository/Repository.js';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { NotFoundException, ForbiddenException } from '@nestjs/common';
import { BasicInterceptor } from '../common/interceptors/interceptors.interceptor';
import { RoleGuard } from '../common/guards/role.gurad';
import { Roles } from '../common/decorator/role';
import { Role } from '../common/enum/Role';
import { PubSub } from "graphql-subscriptions";
const pubSUb = new PubSub()


@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async create(userId: number, postInput: CreatePostInput) {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
    });
    if (!user) {
      throw new NotFoundException(`User with id ${userId} not found`);
    }
    const data = {
      ...postInput,
      user: user,
    };



    await this.postRepository.save(data);

    await pubSUb.publish('newPost', {
      newPost: data,
    });
    return true
  }

  async findAll(page?: number, limit?: number) {
    const formatPosts = (posts: Post[]) => {
      return posts.map(post => ({
        ...post,
        likes: post.likes.map(like => ({
          userId: like.user_id,
          postId: like.post_id,
        })),
      }));
    };

    // No pagination
    if (!page || !limit) {
      const posts = await this.postRepository.find({
        order: {
          createdAt: 'DESC',
        },
        relations: {
          likes: true,
          user:true
        },
      });

      return {
        posts: formatPosts(posts),
        currentPage: 1,
        totalPages: 1,
        totalPosts: posts.length,
      };
    }

    // Pagination
    const skip = (page - 1) * limit;

    const [posts, totalPosts] =
      await this.postRepository.findAndCount({
        skip,
        take: limit,
        order: {
          createdAt: 'DESC',
        },
        relations: {
          likes: true,
          user:true
        },
      });

    const totalPages = Math.ceil(totalPosts / limit);

    return {
      posts: formatPosts(posts),
      currentPage: page,
      totalPages,
      totalPosts,
    };
  }

  async findOne(id: number) {
    return await this.postRepository.findOne({
      where: { id }
    })
  }


  async updateAdmin(
    id: number,
    updatePostInput: UpdatePostInput,
  ) {
    const updateData = {
      ...updatePostInput,
      updatedAt: new Date(),
    };

    const result = await this.postRepository.update(
      id,
      updateData,
    );

    if (result.affected === 0) {
      throw new NotFoundException(
        `Post with id ${id} not found`,
      );
    }
    console.log("edited by user")
    return true;
  }


  async updateUser(
    id: number,
    userId: number,
    updatePostInput: UpdatePostInput,
  ) {
    const post = await this.postRepository.findOne({
      where: {
        id,
      },
      relations: {
        user: {
          posts: {
            user: true
          }
        }
      },
    });

    // console.log(post)

    if (!post) {
      throw new NotFoundException(
        `Post with id ${id} not found`,
      );
    }
    if (post.user.id !== userId) {
      throw new ForbiddenException(
        'You cannot update this post',
      );
    }

    const updateData = {
      ...updatePostInput,
      updatedAt: new Date(),
    };

    await this.postRepository.update(
      id,
      updateData,
    );
    console.log("edited by user")

    return true;
  }

  @UseGuards(RoleGuard)
  @Roles(Role.ADMIN)
  async removeAdmin(id: number) {
    const result = await this.postRepository.delete({ id });
    if (result.affected === 0) {
      throw new NotFoundException(
        `Post with id ${id} not found`,
      );
    }
    return true;
  }

  @UseInterceptors(BasicInterceptor)
  async removeUser(
    userId: number,
    id: number,

  ) {
    const post = await this.postRepository.findOne({
      where: {
        id,
      },
      relations: {
        user: true,
      },
    });

    if (!post) {
      throw new NotFoundException(
        `Post with id ${id} not found`,
      );
    }

    if (post.user.id !== userId) {
      throw new ForbiddenException(
        'You cannot delete this post',
      );
    }

    await this.postRepository.delete(id);

    return true;
  }
}
