import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

/**
 * モジュールは関連するルーティングやロジック等をまとめる役割を持つ
 */
@Module({
  imports: [], // モジュールを要素として入れる配列
  controllers: [AppController], // ルーティングを記述したControllers
  providers: [AppService], // 処理を記述したProviders
})
export class AppModule {}
