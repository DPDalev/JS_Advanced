function people() {

    class Employee {
        constructor(name, age) {
            if(new.target === Employee) {
                throw new Error("Abstract class cannot be initialized.");
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        };

        work() {
            let currentTask = this.tasks.shift();
            console.log(this.name + currentTask);
            this.tasks.push(currentTask);
        };

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`)
        }

        getSalary() {
            return this.salary;
        }
    }

    class Junior extends Employee {
        constructor (name, age, salary, tasks) {
            super(name, age);
            this.tasks.push(' is working on a simple task.')
        }
    }

    class Senior extends Employee {
        constructor (name, age) {
            super(name, age);
            this.tasks.push(' is working on a complicated task.');
            this.tasks.push(' is taking time off work.');
            this.tasks.push(' is supervising junior workers.');
        }
    }

    class Manager extends Employee {
        constructor (name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks.push(' scheduled a meeting.');
            this.tasks.push(' is preparing a quarterly report.')
        }

        getSalary() {
            return this.salary + this.dividend;
        }
    }
    return { Employee, Junior, Senior, Manager };
}

result = people();

var guy1 = new result.Junior('pesho', 20);
var guy2 = new result.Senior('gosho', 21);
var guy3 = new result.Manager('ivan', 22);

console.log(guy1.hasOwnProperty('name'));//)//.to.equal(true, "Name property not found on Junior instance.");
console.log(guy1.hasOwnProperty('age'));//)//.to.equal(true, "Age property not found on Junior instance.");
console.log(guy1.hasOwnProperty('salary'));//).to.equal(true, "Salary property not found on Junior instanc
console.log(guy2.hasOwnProperty('name'));//).to.equal(true, "Name property not found on Senior instance.");
console.log(guy2.hasOwnProperty('age'));//).to.equal(true, "Age property not found on Senior instance.");
console.log(guy2.hasOwnProperty('salary'));//).to.equal(true, "Salary property not found on Senior instanc
console.log(guy3.hasOwnProperty('name'));//).to.equal(true, "Name property not found on Manager instance.");
console.log(guy3.hasOwnProperty('age'));//).to.equal(true, "Age property not found on Manager instance.");
console.log(guy3.hasOwnProperty('salary'));//).to.equal(true, "Salary property not found on Manager instance.");
console.log(guy3.hasOwnProperty('dividend'));//).to.equal(true, "Salary property not found on Manager instance.");