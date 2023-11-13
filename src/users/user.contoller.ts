import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { CreateUserDto } from './dto/user.dto';
import { User, UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAll(): User[] {
    return this.userService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): User {
    return this.userService.getOne(id);
  }

  @Post()
  createUser(@Body() newUser: CreateUserDto): void {
    return this.userService.create(
      newUser.name,
      newUser.age,
      newUser.lastName,
      newUser.phone,
    );
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): void {
    this.userService.delete(id);
  }
}
