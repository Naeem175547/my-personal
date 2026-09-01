import { Injectable } from "@nestjs/common";
import { S3Client, GetObjectCommand, PutObjectCommand, DeleteObjectCommand, CopyObjectCommand, HeadObjectCommand, ListObjectsV2Command } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

@Injectable()
export class S3Service {

    private readonly s3 = new S3Client({
        region: process.env.AWS_REGION,
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
        },
    });

    async uploadFile(
        buffer: Buffer,
        key: string,
        contentType: string,
    ) {
        return this.s3.send(
            new PutObjectCommand({
                Bucket: process.env.AWS_S3_BUCKET!,
                Key: key,
                Body: buffer,
                ContentType: contentType,
            }),
        );
    }

    async getFile(key: string) {
        return this.s3.send(
            new GetObjectCommand({
                Bucket: process.env.AWS_S3_BUCKET!,
                Key: key,
            }),
        );
    }

    async deleteFile(key: string) {
        return this.s3.send(
            new DeleteObjectCommand({
                Bucket: process.env.AWS_S3_BUCKET!,
                Key: key,
            }),
        );
    }

    async fileExists(key: string) {
        return this.s3.send(
            new HeadObjectCommand({
                Bucket: process.env.AWS_S3_BUCKET!,
                Key: key,
            }),
        );
    }

    async listFiles(prefix?: string) {
        return this.s3.send(
            new ListObjectsV2Command({
                Bucket: process.env.AWS_S3_BUCKET!,
                Prefix: prefix,
            }),
        );
    }

    async copyFile(
        sourceKey: string,
        destinationKey: string,
    ) {
        return this.s3.send(
            new CopyObjectCommand({
                Bucket: process.env.AWS_S3_BUCKET!,
                CopySource:
                    `${process.env.AWS_S3_BUCKET!}/${sourceKey}`,
                Key: destinationKey,
            }),
        );
    }

    async moveFile(
        sourceKey: string,
        destinationKey: string,
    ) {

        // First copy

        await this.copyFile(
            sourceKey,
            destinationKey,
        );
        // Then delete original

        await this.deleteFile(sourceKey);

        return {
            sourceKey,
            destinationKey,
        };
    }
    // 9. GENERATE DOWNLOAD PRESIGNED URL
    // ==========================================

    async getDownloadUrl(
        key: string,
        expiresIn = 3600,
    ) {

        const command = new GetObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET!,
            Key: key,
        });
        const url = await getSignedUrl(
            this.s3,
            command,
            {
                expiresIn,
            },
        );

        return url;
    }

    // . GENERATE UPLOAD PRESIGNED URL
    // ==========================================

    async getUploadUrl(
        key: string,
        contentType: string,
        expiresIn = 300,
    ) {

        const command = new PutObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET!,
            Key: key,
            ContentType: contentType,
        });

        const url = await getSignedUrl(
            this.s3,
            command,
            {
                expiresIn,
            },
        );

        return url;
    }
}


