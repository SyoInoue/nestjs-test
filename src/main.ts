import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * 一番最初に実行されるファイル
 */
async function bootstrap() {
  // NestFactoryでインスタンスを生成
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
