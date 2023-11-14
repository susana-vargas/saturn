import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

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

  @Put(':id')
  update(@Param('id') id: string, @Body() update: CreateCompanyDto): void {
    return this.companyService.update(id, update);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.companyService.delete(id);
  }
}
