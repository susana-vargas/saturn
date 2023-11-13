import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';

export type User = {
  id: string;
  age: number;
  name: string;
  lastName: string;
  phone: number;
};

@Injectable()
export class UserService {
  private users: User[] = [];

  getAll(): User[] {
    return this.users;
  }

  getOne(id: string): User {
    return this.users.find((user) => user.id === id);
  }

  create(name: string, age: number, lastName: string, phone: number): void {
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

  delete(id: string): void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
