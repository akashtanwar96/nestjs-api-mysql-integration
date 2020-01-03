import { Controller, Get, HttpCode, Param, Body, Post, Request, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiHeader } from '@nestjs/swagger';
import { User } from './user.entity';

@ApiHeader({
    name: 'User Authorization',
    description: 'User Auth token',
  })
@Controller('user')
export class UserController {
   
    constructor(
        private absSrv: UserService
    ) { }

    // @Get()
    // getSomething() {
    //     return 'something' + this.getSometime();
    // }

    // getSometime() {
    //     return this.absSrv.getSomething();
    // }

    @Get('total')
    getUsers() {
       return this.absSrv.abcgetUsers();
    }

    // @Get(':id')
    // @HttpCode(201)
    // AddUser(@Param('id') params) {
    //    return this.absSrv.addUser('vadehi','user', params);
    // }

    @Post('addUserWithBody')
    AddUserWithBody(@Request() body: any) {
        return '';
    //    return this.absSrv.addUser(body.name,body.type,body.id);
    }

    //   @Get(':id')
    // @HttpCode(201)
    // RemoveUser(@Param('id') params : number) {
    //    return this.absSrv.removeUser(params);
    // }

    
    @Get(':id')
    get(@Param() params) {
        return this.absSrv.getUser(params.id);
    }

    @Post()
    create(@Body() user: User) {
        console.log(user,'tingu');
        
        return this.absSrv.createUser(user);
    }

    @Put()
    update(@Body() user: User) {
        return this.absSrv.updateUser(user);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.absSrv.deleteUser(params.id);
}

}
