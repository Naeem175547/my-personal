import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesResolver } from './likes.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LikesEntity } from './entity/likes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LikesEntity])],
  providers: [LikesService, LikesResolver]
})
export class LikesModule { }
