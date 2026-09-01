
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import Consul from 'consul';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3005;
  const consul = new Consul({
    host: 'localhost',
    port: 8500,
  });
  const serviceId = 'payment-unique-id-1';
  const registeringDetails = {
  name: 'payment-service',
  address: '172.18.80.1',
  port: 3005,
  id: serviceId,

  check: {
    name: 'payment-service-health',
    http: `http://172.18.80.1:${port}/api/health`,
    interval: '10s',
    timeout: '5s',
  },
};

  // Start NestJS first
  await app.listen(port);

  // Register service in Consul
  await consul.agent.service.register(registeringDetails);

  console.log(
    `Payment Service is running on port ${port} and registered in Consul`,
  );

  // Deregister service when application is stopped
  process.on('SIGINT', async () => {
    await consul.agent.service.deregister(serviceId);
    console.log('Payment Service deregistered from Consul');
    await app.close();
    process.exit(0);
  });
}

bootstrap();

