import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'go to http://localhost:3000/graphql to access the GraphQL playground';
  }
}
