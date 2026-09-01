

import { ObjectType, Int, Field } from "@nestjs/graphql";
import { Like } from "../../likes/types/like.type";
import { User } from "../../user/types/user.type";

@ObjectType()
export class Post {

    @Field(() => Int)
    id: number;

    @Field()
    title: string;

    @Field({ nullable: true })
    content?: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;

    @Field(() => Int)
    userId: number;

    @Field(() => [Like])
    likes: Like[];

    @Field(()=>User)
    user?:User
}


@ObjectType()
export class PostsResponse {

    @Field(() => [Post])
    posts: Post[];

    @Field(() => Int)
    currentPage: number;

    @Field(() => Int)
    totalPages: number;

    @Field(() => Int)
    totalPosts: number;


}