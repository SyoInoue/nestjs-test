import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * ルーティングを記述するコントローラー
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // GETメソッドで、AppServiceクラスに記述されたgetHelloメソッドが実行されるようになっている
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // /goodbyeにアクセスした際に実行されるメソッド
  @Get('goodBye')
  getGoodBye(): string {
    return this.appService.getGoodBye();
  }
}
