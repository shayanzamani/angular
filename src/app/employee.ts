export class Employee{

    name: String
    age: Number
    salary: Number
  length: number;

    public constructor(
        fields?: {
            name: String,
            age: Number,
            salary: Number
        }) {
        if (fields) Object.assign(this, fields);
    }
}