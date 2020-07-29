import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from '../enitites/employee.entity';
import { MongoRepository } from 'typeorm';
import { EmployeeRepository } from '../repositories/employee.repo';
import { CreateEmployeeDto } from './create-employee.dto';

@Injectable()
export class EmployeeService {
  // private employees:EmployeeModel[]=[];
  private logger = new Logger();
  constructor(
    @InjectRepository(EmployeeRepository)
    private employeeRepository: MongoRepository<EmployeeRepository>,
  ) {}

  async createEmployee(createEmployeeDto: CreateEmployeeDto): Promise<any> {
    const { name, position } = createEmployeeDto;
    const new_emp = new Employee();
    new_emp.name = name;
    new_emp.position = position;
    const res = await new_emp.save();
    this.logger.debug(`new emp created:${res}`);
    return res;
  }

  async getAllEmployee(): Promise<any> {
    const emps = await this.employeeRepository.find();
    this.logger.debug(`list of employees: ${emps}`);
    return emps;
  }
}
