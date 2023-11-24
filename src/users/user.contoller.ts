import { CreateUserDto } from './dto/user.dto';
import { User, UserService } from './user.service';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

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
  create(@Body() newUser: CreateUserDto): Promise<User> {
    return this.userService.create(
      newUser.name,
      newUser.age,
      newUser.lastName,
      newUser.phone,
      newUser.email,
    );
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() update: CreateUserDto): void {
    this.userService.update(id, update);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.userService.delete(id);
  }
}
