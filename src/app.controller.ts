import { Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("home")
export class AppController {
  
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string 
  {
    return this.appService.getHello();
  }

  @Post('login')
  setLogin(@Query('username') username : string): string 
  {
    return this.appService.setLogin(username);
  }
  
}
