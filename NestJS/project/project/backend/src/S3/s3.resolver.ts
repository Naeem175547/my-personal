import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { FileUrlResponse } from '../user/types/fileUrlResponse';

import { S3Service } from './s3.Service';

@Resolver()
export class S3Resolver {
    constructor(private s3Service: S3Service) { }
    @Mutation(() => FileUrlResponse)
    async uploadFileUrl(
        @Args('key') key: string,
        @Args('contentType') contentType: string,
    ) {
        const url = await this.s3Service.getUploadUrl(
            key,
            contentType,
        );

        return {
            url,
        };
    }

    @Mutation(() => FileUrlResponse)
    async getFileUrl(
        @Args('key') key: string,
    ) {
        const url = await this.s3Service.getImageUrl(key);
        return {
            url,
        };
    }
}
