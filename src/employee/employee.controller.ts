import { Controller, Get, Post, Body } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './create-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @Post()
  async createEmployee(@Body() createEmployeeDto: CreateEmployeeDto) {
    return await this.employeeService.createEmployee(createEmployeeDto);
  }

  @Get()
  async getAllEmployee(): Promise<any> {
    return this.employeeService.getAllEmployee();
  }
}
