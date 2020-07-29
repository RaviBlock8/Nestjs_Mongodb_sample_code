import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mongodbConfig } from './config/typeorm.mongodb.config';

@Module({
  imports: [EmployeeModule,TypeOrmModule.forRoot(mongodbConfig)],
})
export class AppModule {}
