import { Field, ObjectType, Int } from "@nestjs/graphql";

@ObjectType()
export class Like {
    @Field(() => Int)
    userId: number;

    @Field(() => Int)
    postId: number;
}