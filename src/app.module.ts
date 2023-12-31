import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';

import { CompanyModule } from './companys/company.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [UserModule, CompanyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
