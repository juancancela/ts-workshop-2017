var store = {}
import IResource from './IResource'

export default class Repository<T extends IResource> {

    create(instance: T) : T {
        store[instance.getId()] = instance
        return instance
    }

    read(id: string) : T {
        return store[id]
    }

}
