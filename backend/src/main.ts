import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Habilitando CORS para o frontend poder fazer requisições depois
  app.enableCors();
  await app.listen(3333);
}
void bootstrap();
