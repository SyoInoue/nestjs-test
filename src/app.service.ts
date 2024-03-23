import { Injectable } from '@nestjs/common';

/**
 * サービスは処理・ロジックを記述
 */
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getGoodBye(): string {
    return 'Goodbye!';
  }
}
