import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { Company, CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/company.dto';

@Controller('companies')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Get()
  getAll() {
    return this.companyService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Company {
    return this.companyService.getOne(id);
  }

  @Post()
  create(@Body() newCompany: CreateCompanyDto): void {
    return this.companyService.create(
      newCompany.name,
      newCompany.email,
      newCompany.phone,
    );
  }
}
