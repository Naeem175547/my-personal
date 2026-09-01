class Animal {
    constructor(name, color) {
        this.name = name
        this.color = color
    }

    eat() {
        console.log(this.name + " is eating")
    }
}

class Dog extends Animal {
    constructor(name, color, breed) {
        super(name, color)

        this.breed = breed
    }

    bark() {
        console.log(this.name + " is barking")
    }
}

const d1 = new Dog("Tommy", "Black", "Labrador")

console.log(d1.name)
console.log(d1.color)
console.log(d1.breed)

d1.eat()
d1.bark()

// | Type         | Meaning                           |
// | ------------ | --------------------------------- |
// | Single       | One child from one parent         |
// | Multilevel   | Child inherits from another child |
// | Hierarchical | Multiple children from one parent |
