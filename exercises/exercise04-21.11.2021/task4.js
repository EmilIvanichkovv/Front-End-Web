// Ex 04 Task 4

class Person {
    constructor(salary)
    {
        var _salary = salary
        this.getSalary = function(){return _salary}
    }
};

const worker = new Person("5000")



