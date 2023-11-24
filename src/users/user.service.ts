import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';

import { CreateUserDto } from './dto/user.dto';

export type User = {
  id: string;
  age: number;
  name: string;
  lastName: string;
  phone: number;
  email: string;
};

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: v4(),
      name: 'isabel',
      lastName: 'vagas',
      age: 17,
      email: 'isabel@vargas.com',
      phone: 4578126530,
    },
    {
      id: v4(),
      name: 'pablo',
      lastName: 'vegas',
      age: 30,
      email: 'vegas@pablo.com',
      phone: 4578120310,
    },
    {
      id: v4(),
      name: 'juan',
      lastName: 'rivero',
      age: 25,
      email: 'ruvero@juan.com',
      phone: 4578126530,
    },
    {
      id: v4(),
      name: 'ana',
      lastName: 'ríos',
      age: 15,
      email: 'ana@ríos.com',
      phone: 4578126530,
    },
    {
      id: v4(),
      name: 'paula',
      lastName: 'vagas',
      age: 35,
      email: 'paula@vargas.com',
      phone: 4578126530,
    },
    {
      id: v4(),
      name: 'alberto',
      lastName: 'fuentes',
      age: 15,
      email: 'albert@fuentes.com',
      phone: 4578126530,
    },
    {
      id: v4(),
      name: 'anastacio',
      lastName: 'vera',
      age: 50,
      email: 'anastacio@vera.com',
      phone: 4578126530,
    },
    {
      id: v4(),
      name: 'ricardo',
      lastName: 'alvares',
      age: 45,
      email: 'ricardo@alvares.com',
      phone: 4578126530,
    },
    {
      id: v4(),
      name: 'alonso',
      lastName: 'barrera',
      age: 27,
      email: 'alonso@barrera.com',
      phone: 4578126530,
    },
    {
      id: v4(),
      name: 'francisco',
      lastName: 'vagas',
      age: 54,
      email: 'fran@vagas.com',
      phone: 4578126530,
    },
  ];

  getAll(): User[] {
    return this.users;
  }

  getOne(id: string): User {
    return this.users.find((user) => user.id === id);
  }

  create(
    name: string,
    age: number,
    lastName: string,
    phone: number,
    email: string,
  ): Promise<User> {
    const user: User = {
      id: v4(),
      age,
      name,
      lastName,
      phone,
      email,
    };
    this.users.push(user);
    return Promise.resolve(user);
  }

  delete(id: string): void {
    this.users = this.users.filter((user) => user.id !== id);
  }

  update(id: string, update: CreateUserDto): void {
    const user = this.users.find((user) => user.id === id);
    const newUser = Object.assign(user, update);
    this.users = this.users.map((user) => (user.id === id ? newUser : user));
  }
}
