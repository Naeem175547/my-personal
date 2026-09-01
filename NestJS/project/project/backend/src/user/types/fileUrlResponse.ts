import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class FileUrlResponse {
    @Field()
    url: string;
}