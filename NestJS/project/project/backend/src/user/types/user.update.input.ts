import { Field, InputType } from "@nestjs/graphql";
import { UserRole } from "./user.enum";
@InputType()
export class UserUpdateInput {
    @Field()
    name?: string

    @Field()
    username?: string

    @Field()
    password?: string

    @Field({ nullable: true })
    key: string

    @Field({ nullable: true })
    contentType: string


    @Field(() => UserRole)
    role?: UserRole

    @Field(() => String)
    email?: string

}



