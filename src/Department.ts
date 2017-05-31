import Address from './Address'
import IResource from './IResource'

export default class Department implements IResource {
    getId(): string {
        return "2"
    }

    display(): string {
        return `${this.name}, ${this.address}`
    }

    constructor(private name: string, private address: Address | string) {

    }
}