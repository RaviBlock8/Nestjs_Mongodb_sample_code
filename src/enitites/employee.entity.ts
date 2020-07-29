import { BaseEntity, Entity, ObjectIdColumn, Column } from "typeorm";

@Entity('Employee')
export class Employee extends BaseEntity{
    @ObjectIdColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    position:string;
}