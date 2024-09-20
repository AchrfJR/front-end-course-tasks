// Base class: Shape
class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error("Cannot create an instance of abstract class Shape.")
        }
    }
}

// Rectangle class that inherits from Shape
class Rectangle extends Shape {
    static count = 0 // Class property to count instances

    constructor(width, height) {
        super() // Call the constructor of the Shape class
        this.width = width
        this.height = height
        Rectangle.count++ // Increment count of created Rectangle objects
    }

    // Method to calculate area
    getArea() {
        return this.width * this.height
    }

    // Method to calculate perimeter
    getPerimeter() {
        return 2 * (this.width + this.height)
    }

    // Method to display information
    displayInfo() {
        const area = this.getArea()
        const perimeter = this.getPerimeter()
        console.log(
            `Rectangle: Width = ${this.width}, Height = ${this.height}, Area = ${area}, Perimeter = ${perimeter}`
        )
    }

    // Override toString method
    toString() {
        return `Rectangle: Width = ${this.width}, Height = ${this.height
            }, Area = ${this.getArea()}, Perimeter = ${this.getPerimeter()}`;
    }

    // Class method to retrieve the count of created Rectangle objects
    static getCount() {
        return Rectangle.count;
    }
}

// Square class that inherits from Rectangle
class Square extends Rectangle {
    constructor(side) {
        super(side, side); // A square has equal width and height
    }
}

// Example usage:
try {
    const rectangle1 = new Rectangle(10, 5)
    rectangle1.displayInfo()
    console.log(rectangle1.toString())

    const square1 = new Square(4)
    square1.displayInfo()
    console.log(square1.toString())

    console.log(`Total Rectangles created: ${Rectangle.getCount()}`)

    // // Attempt to create an instance of Shape
    // const shape = new Shape() // This will throw an error
} catch (error) {
    console.error(error.message)
}
