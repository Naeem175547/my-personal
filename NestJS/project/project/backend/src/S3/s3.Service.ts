import { GetObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export class S3Service {
    private s3: S3Client;
    constructor() {
        this.s3 = new S3Client({
            region: process.env.AWS_REGION,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
            },
        });
    }
    async getUploadUrl(key: string, type: string) {
        const command = new PutObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET,
            Key: key,
            ContentType: type,
        });
        const url = await getSignedUrl(this.s3, command, {
            expiresIn: 300,//in second
        });
        return url;
    }

    async getImageUrl(key: string) {
        const command = new GetObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET,
            Key: key
        })
        const url = await getSignedUrl(this.s3, command, {
            expiresIn: 300
        })
        return url;

    }
}