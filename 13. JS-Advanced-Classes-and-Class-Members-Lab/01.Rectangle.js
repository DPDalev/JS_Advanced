class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    calcArea() {
        return this.width * this.height;
    }
}

let rect = new Rectangle(5, 7, 'red');

console.log(rect.calcArea());
console.log(rect.height);
console.log(rect.color);