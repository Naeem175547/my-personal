import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class BasicMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(`req is comming from ${req.host}`)
    next();
  }
}
