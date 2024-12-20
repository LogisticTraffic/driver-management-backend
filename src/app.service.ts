import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  setLogin(username : string): string {
    return 'done '+username;
  }
}
