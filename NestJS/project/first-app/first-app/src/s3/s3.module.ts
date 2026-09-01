import { Module } from '@nestjs/common';
import { S3Service } from './s3.service';
import { Global } from '@nestjs/common';
@Global()
@Module({
  providers: [S3Service],
  exports: [S3Service]
})
export class S3Module { }
