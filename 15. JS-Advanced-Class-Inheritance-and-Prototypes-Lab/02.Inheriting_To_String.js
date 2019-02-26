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

let Person = inheritingToString().Person;
let Teacher = inheritingToString().Teacher;
let Student = inheritingToString().Student;

let maria = new Person("Maria", "maria@abv.bg");
console.log(maria);
console.log("" + maria);

let teacherPesho = new Teacher("Pesho", "pesho@abv.bg", "PHP");
console.log(teacherPesho);
console.log('' + teacherPesho);

let studentMitko = new Student("Mitko", "mitko@abv.bg", "JavaScript");
console.log(studentMitko);
console.log('' + studentMitko);