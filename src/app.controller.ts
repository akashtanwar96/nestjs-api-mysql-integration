import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  user: string | null= 'jiye k bihar k lala';
  type: string | null = 'ki m nachi ve ';
  age: number | null = 20;

  constructor(private readonly appService: AppService) {}

  @Get('details')
  getHello(): any {
    return this.appService.getHello(this.user, this.type, this.age);
  }

  @Get()
  getBaymax(): any {
    return this.appService.baymax(this.user, this.type, this.age);
  }
}
