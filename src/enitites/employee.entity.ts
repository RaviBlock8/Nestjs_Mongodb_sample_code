import { BaseEntity, Entity, ObjectIdColumn, Column } from "typeorm";

@Entity('Employee')
export class Employee extends BaseEntity{
    @ObjectIdColumn()
    id:string;
    @Column()
    name:string;
    @Column()
    position:string;
}