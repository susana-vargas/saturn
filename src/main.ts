import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
    }),
  );
  app.use(
    cors({
      origin: 'http://localhost:3000',
      methods: 'GET, PUT, POST, DELETE',
      allowedHeaders: 'Content-Type',
    }),
  );

  // app.use((req, res, next) => {
  //   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  //   res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  //   res.header('Access-Control-Allow-Headers', 'Content-Type');
  //   next();
  // });
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
