import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable ,map,tap} from 'rxjs';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class InterceptorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = GqlExecutionContext.create(context);
    const res = ctx.getContext().res;
    return next.handle().pipe(
  map((data) => ({
    success: true,
    message: 'Request successful',
    data: data,
  })),
);
  }
}
