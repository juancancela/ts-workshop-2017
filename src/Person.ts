import IResource from './IResource'

export default class Person implements IResource {
    getId(): string {
        return "1"
    }
    
    display(): string {
        return `${this.name}, ${this.last_name}: ${this.age}`
    }

    constructor(private name: string, private last_name: string, private age: number) {


    }
}