import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

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
  create(@Body() newUser: CreateUserDto): void {
    return this.userService.create(
      newUser.name,
      newUser.age,
      newUser.lastName,
      newUser.phone,
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
