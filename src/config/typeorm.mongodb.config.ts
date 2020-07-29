import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Employee } from '../enitites/employee.entity';

export const mongodbConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: 'mongodb://127.0.0.1:27017/nestTest',
  database: 'nestTest',
  useUnifiedTopology: true,
  useNewUrlParser: true,
  entities: [Employee],
};
