export class Employee {
    id: string;
    name: string;
    email: string;
    phone: number;

    constructor(id: string, name: string, email: string, phone: number) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}