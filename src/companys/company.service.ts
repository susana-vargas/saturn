import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';

export type Company = {
  id: string;
  name: string;
  email: string;
  phone: number;
};

@Injectable()
export class CompanyService {
  private companies: Company[] = [];

  getAll() {
    return this.companies;
  }

  getOne(id: string): Company {
    return this.companies.find((company) => company.id === id);
  }

  create(name: string, email: string, phone: number): void {
    const company = {
      id: v4(),
      name,
      email,
      phone,
    };
    this.companies.push(company);
    console.log(this.companies);
  }
}
