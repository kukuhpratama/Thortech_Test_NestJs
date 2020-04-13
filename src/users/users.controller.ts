import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Get()
    index(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get('v1') // /users/v1
    index_new(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<any> {
        return this.usersService.findOne(id);
    }

    @Post('create')
    async create(@Body() userData: User): Promise<any> {
        return this.usersService.create(userData);
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() userData: User): Promise<any> {
        userData.id = Number(id);
        console.log('Update #' + userData.id)
        return this.usersService.update(userData);
    }


    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
        return this.usersService.delete(id);
    }
}



