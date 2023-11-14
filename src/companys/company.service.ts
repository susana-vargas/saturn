import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import { CreateCompanyDto } from './dto/company.dto';

export type Company = {
  id: string;
  name: string;
  email: string;
  phone: number;
};

@Injectable()
export class CompanyService {
  private companies: Company[] = [];

  getAll(): Company[] {
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

  update(id: string, update: CreateCompanyDto): void {
    const company = this.companies.find((company) => company.id === id);
    const newCompany = Object.assign(company, update);
    this.companies = this.companies.map((company) =>
      company.id === id ? newCompany : company,
    );
  }

  delete(id: string): void {
    this.companies = this.companies.filter((company) => company.id !== id);
  }
}
