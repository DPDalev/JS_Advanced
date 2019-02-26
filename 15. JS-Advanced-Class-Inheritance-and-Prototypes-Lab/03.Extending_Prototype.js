function inheritingToString() {

    class Person {
        constructor (name, email){
            this.name = name;
            this.email = email;
        }
        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
        toString() {
            return `${super.toString().slice(0, -1)}, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
        toString() {
            return `${super.toString().slice(0, -1)}, course: ${this.course})`;
        }
    }

    return {
        Person, Teacher, Student
    };
}


function extendClass(ClassToExtend) {

    ClassToExtend.prototype.species = 'Human';
    ClassToExtend.prototype.toSpeciesString = function () {

        return `I am a ${this.species}. ${this.toString()}`;
    }
}

let Person = inheritingToString().Person;

extendClass(Person);

let p = new Person("Mimi", "mimi@abv.bg");

//console.log(p.toString());
console.log(p.toSpeciesString());
//console.log(Person);


