import IResource from './IResource'

export default class Address implements IResource {
    getId(): string {
        return "3"
    }
    display(): string {
        return `${this.street}, ${this.number}`
    }
    constructor(private street: string, private number: number | string) {

    }
}