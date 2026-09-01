import {
    Controller,
    Post,
    UploadedFile,
    UploadedFiles,
    UseInterceptors,
} from '@nestjs/common';

import {
    FileInterceptor,
    FilesInterceptor,
} from '@nestjs/platform-express';

import { S3Service } from 'src/s3/s3.service';

@Controller('upload-file')
export class UploadFileController {
    constructor(private readonly s3: S3Service) { }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(
        @UploadedFile() file: Express.Multer.File,
    ) {
        const key = `photos/${Date.now()}-${file.originalname}`;

        return this.s3.uploadFile(
            file.buffer,
            key,
            file.mimetype,
        );
    }


    @Post('uploads')
    @UseInterceptors(FilesInterceptor('files', 10))
    async uploadFiles(
        @UploadedFiles() files: Express.Multer.File[],
    ) {
        const uploadedfiles: any[] = [];

        for (const file of files) {
            const key = `photos/${Date.now()}-${file.originalname}`;

            const result = await this.s3.uploadFile(
                file.buffer,
                key,
                file.mimetype,
            );
            uploadedfiles.push(result);
        }

        return {
            message: 'Files uploaded successfully',
            files: uploadedfiles,
        };
    }


    @Post('getObject')
    getObject() {
        return this.s3.getDownloadUrl(
            'photos/1787225180972',
            10000,
        );
    }


    @Post('getObjectUpload')
    getObjectUpload() {
        return this.s3.getUploadUrl(
            `photos/${Date.now()}`,
            'image/jpeg',
        );
    }
}