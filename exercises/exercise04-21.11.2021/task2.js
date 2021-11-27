// Ex 04 Task 2
class Person  {
    planet = "Earth"
    constructor(name)
    {
        this.name = name
    }
    greeting()
    {
        console.log(`Hello ${this.name} form planet ${this.planet}`)
    }
}

const person1 = new Person("Emil")
const person2 = new Person("Danny")
const person3 = new Person("Milla")

person1.greeting()
person2.greeting()
person3.greeting()