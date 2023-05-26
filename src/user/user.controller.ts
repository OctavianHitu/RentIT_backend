import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateUserDto } from 'src/dtos/createUserDto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
constructor(private userService:UserService){}

@Get()
findAll() {
  return this.userService.findAll();
}
@Post()
createUser(@Body() userDto: CreateUserDto) {
  return this.userService.createUser(userDto);
}
@Put('/:id')
updateUser(@Param('id') id: ObjectId, @Body() userDto: Partial<CreateUserDto>) {
  return this.userService.updateUser(id, userDto);
}

@Delete('/:id')
deleteUser(@Param('id') id: ObjectId) {
  return this.userService.deleteUser(id);
}

// @Get('/:email')
//   getIdByEmail(@Param('email') email: string) {
//     return this.userService.findIdByEmail(email);
//   }
  @Get('/:email')
  getByEmail(@Param('email') email: string) {
    return this.userService.findByEmail(email);
  }
}
