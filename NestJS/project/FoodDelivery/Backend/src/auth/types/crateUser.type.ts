import { Field, ObjectType } from "@nestjs/graphql";
import { UserType } from "./user.type";

@ObjectType()
export class CreateUserType{
    @Field()
    message!:string

    @Field()
    userData!:UserType


}