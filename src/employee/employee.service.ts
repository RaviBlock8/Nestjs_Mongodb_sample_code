import {
  Injectable,
  Logger,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
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

  async createEmployee(
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<Employee> {
    const { name, position } = createEmployeeDto;
    if (name === '' || position === '') {
      throw new BadRequestException(
        "Name and position of employee can't be empty",
      );
    }
    const new_emp = new Employee();
    new_emp.name = name;
    new_emp.position = position;
    const res = await new_emp.save();
    this.logger.debug(`new emp created:${JSON.stringify(res)}`);
    return res;
  }

  async getAllEmployee(): Promise<EmployeeRepository[]> {
    const emps = await this.employeeRepository.find();
    return emps;
  }

  async deleteEmployee(id: string): Promise<any> {
    const del_emp = await this.findEmployee(id);
    await this.employeeRepository.delete(id);
    this.logger.debug(`removed ${JSON.stringify(del_emp)}`);
    return del_emp;
  }

  async findEmployee(id: string): Promise<any> {
    const emp = await this.employeeRepository.findOne(id);
    this.logger.debug(`found emp ${JSON.stringify(emp)}`);
    if (!emp) {
      throw new NotFoundException();
    } else {
      return emp;
    }
  }
}
