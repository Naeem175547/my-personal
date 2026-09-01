import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Post } from "../../post/types/post.type";
@ObjectType()
export class User {
    @Field(() => Int)
    id: number

    @Field()
    name: string

    @Field()
    username: string

    @Field()
    email: string

    @Field()
    role: string

    @Field({ nullable: true })
    key?: string

    @Field(() => [Post])
    posts: Post[];

}