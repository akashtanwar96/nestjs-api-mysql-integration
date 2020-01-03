import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(name: string, type: string, age: number): any {
    return name+type+age;
  }

  baymax(name: string, type: string, age: number): any {
    return 'Hello World akash!';
  }
}
