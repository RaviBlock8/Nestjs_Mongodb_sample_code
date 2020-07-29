import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Query,
  Param,
} from '@nestjs/common';
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

  @Get(':id')
  async getAllEmployee(@Param('id') id: string): Promise<any> {
    if (!id) {
      return await this.employeeService.getAllEmployee();
    } else {
      return await this.employeeService.findEmployee(id);
    }
  }

  @Delete()
  async deleteEmployee(@Query('id') id: string): Promise<any> {
    return await this.employeeService.deleteEmployee(id);
  }
}
