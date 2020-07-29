import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger=new Logger('bootsrap');
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  logger.verbose('Application started sucessfully')
}
bootstrap();
