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
  private companys: Company[] = [];

  getAll() {
    return this.companys;
  }

  getOne(id: string): Company {
    return this.companys.find((company) => company.id === id);
  }

  create(name: string, email: string, phone: number): void {
    const company = {
      id: v4(),
      name,
      email,
      phone,
    };
    this.companys.push(company);
    console.log(this.companys);
  }
}
