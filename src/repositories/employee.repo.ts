import { Repository, EntityRepository } from 'typeorm';
import { Employee } from '../enitites/employee.entity';

@EntityRepository(Employee)
export class EmployeeRepository extends Repository<Employee>{

}