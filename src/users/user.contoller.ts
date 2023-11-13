import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private UserService: UserService) {}

  @Get()
  getAll() {
    return this.UserService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.UserService.getOne(id);
  }

  @Post()
  createUser(@Body() newUser: CreateUserDto) {
    return this.UserService.createUser(
      newUser.name,
      newUser.age,
      newUser.lastName,
      newUser.phone,
    );
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    this.UserService.deleteUser(id);
  }
}
