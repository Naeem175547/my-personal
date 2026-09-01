import { NestFactory } from "@nestjs/core";
import { Transport ,MicroserviceOptions} from "@nestjs/microservices";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app=await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport:Transport.TCP,
    options:{
      port:8889
    }
  })

  await app.startAllMicroservices();
  await app.listen(3000)
  console.log(`hybrid app is running on port 3000(REST) and 8889 (TCP)`)
  
}

bootstrap()