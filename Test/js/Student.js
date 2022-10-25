import { Person } from "./person";
export class Student extends Person {
 constructor(firstname, lastname, age, grade){
    super(firstname, lastname, age);
    this.grade = grade;
  }

 }
 print()
