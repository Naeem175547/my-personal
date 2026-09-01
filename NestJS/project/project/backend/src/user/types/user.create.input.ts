import { Field, InputType } from "@nestjs/graphql";
import { UserRole } from "./user.enum";
@InputType()
export class UserCreateInput {
    @Field()
    name: string

    @Field()
    username: string

    @Field()
    email: string

    @Field()
    password: string

    @Field({ nullable: true })
    key: string

    @Field({ nullable: true })
    contentType: string


    @Field(() => UserRole)
    role: UserRole

}



