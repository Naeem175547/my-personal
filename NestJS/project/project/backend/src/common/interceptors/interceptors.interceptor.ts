import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class BasicInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> {

    console.log('Enter inside resolver');
    const startTime = Date.now();
    return next.handle().pipe(
      tap((result) => {
        console.log('Return from resolver');
        console.log('Result:', result);

        const executionTime = Date.now() - startTime;

        console.log(`Execution time: ${executionTime}ms`);
      }),
    );
  }
}