import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable ,map,tap} from 'rxjs';

@Injectable()
export class InterceptorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
     return next.handle().pipe(
    map((data) => ({
    success: true,
    message: 'Request successful',
    data: data,
  })),
);
  }
}
