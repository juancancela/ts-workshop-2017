const express = require('express')
import Person from './Person'
import Department from './Department'
import Address from './Address'
import DepartmentService from './DepartmentService'
import PersonService from './PersonService'

export default class Application {

    constructor(port: number) {
        var app = express()

        app.get('/', (req, res) => {
            res.send('Hello World!')
        })

        app.get('/person', (req, res) => {
            let person = new Person("Marquitos", "El de la Pizza", 29)

            let personService = new PersonService()
            
            res.send(personService.create(person).display())
        })

        app.get('/department', (req, res) => {
            let address = new Address("Honduras", "1212")
            let department = new Department("A3", address.display())
            
            let departmentService = new DepartmentService()
            
            res.send(departmentService.create(department).getId())
        })

        app.listen(port, () => {
            console.log('Example app listening on port 3000!')
        })
    }

}
