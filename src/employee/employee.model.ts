
interface Project{
    name:string;
}
export class EmployeeModel{
    id:number;
    name:string;
    position:string;
    projects:Project[];
}