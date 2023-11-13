import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  private users: CreateUserDto[] = [];
  getAll() {
    return this.users;
  }

  getOne(id: string): CreateUserDto {
    return this.users.find((user) => user.id === id);
  }

  createUser(name: string, age: number, lastName: string, phone: number) {
    const user = {
      id: v4(),
      age,
      name,
      lastName,
      phone,
    };
    this.users.push(user);
    console.log(this.users);
  }

  deleteUser(id: string) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
