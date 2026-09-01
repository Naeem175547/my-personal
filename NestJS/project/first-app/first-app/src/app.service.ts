import { Injectable } from '@nestjs/common';
import { JoiScheam } from './JOI/joiSchema';

@Injectable()
export class AppService {
  private data = {
    name: "imran khan",
    password: "imran",
    email: "mn175547@gmail.com"

  }
  getHello(): string {
    const result = JoiScheam.validate(this.data);
    if (result.error) {
      console.log("validation failed...")
    }
    else {
      console.log('validation pass', result.value)
    }
    console.log(result)
    return 'Hello World!';
  }

}
