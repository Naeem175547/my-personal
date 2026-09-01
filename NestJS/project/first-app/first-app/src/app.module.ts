import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeeModule } from './employee/employee.module';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/student.service';
import { CustomerModule } from './customer/customer.module';
import { MynameController } from './myname/myname.controller';
import { ExceptionController } from './exception/exception.controller';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { UploadFileModule } from './upload-file/upload-file.module';
import { S3Module } from './s3/s3.module';
import { ConfigModule } from '@nestjs/config';
import { ChatGatway } from './chat/chat.gateway';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,

  }), EmployeeModule, CustomerModule, UploadFileModule, S3Module],

  controllers: [
    AppController,
    UserController,
    ProductController,
    StudentController,
    MynameController,
    ExceptionController,
  ],
  providers: [AppService, ProductService, StudentService, ChatGatway],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
