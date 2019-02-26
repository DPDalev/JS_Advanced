function classHierarchy() {
    class Figure {
        constructor() {
            if(new.target === Figure) {
                throw new Error("Cannot initialize abstract class");
            }
        }
        get area() { return undefined; }

        toString() {
            let type = this.constructor.name;
            return type;
        }
    }

    class Circle extends Figure {
        constructor (radius) {
            super();
            this.radius = radius;
        }
        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return super.toString() + ` - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor (width, height) {
            super();
            [this.width, this.height] = [width, height];
        }
        get area() {
            return this.width * this.height;
        }

        toString() {
            return super.toString() + ` - width: ${this.width}, height: ${this.height}`;
        }
    }
    return { Figure, Circle, Rectangle };
}

//let Figure = classHierarchy().Figure;
let Circle = classHierarchy().Circle;
let Rectangle = classHierarchy().Rectangle;


//let f = new Figure();

let c = new Circle(5);
console.log(c.area);        //78.53981633974483
console.log(c.toString());  //Circle - radius: 5

let r = new Rectangle(3,4);
console.log(r.area);        //12
console.log(r.toString());  //Rectangle - width: 3, height: 4

