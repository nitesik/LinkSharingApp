import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://link-sharing-app-web.vercel.app',
    ],
    credentials: true,
  });
  const port = process.env.PORT || 3001;
  await app.listen(port, () => console.log('listening at', port));
}
bootstrap();
