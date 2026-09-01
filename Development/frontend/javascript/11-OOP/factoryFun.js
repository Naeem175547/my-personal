function factoryFun(name) {
    return {
        name: name,
        greet() {
            console.log("Hello " + this.name)
        }
    }
}



const u1 = factoryFun("Naeem")
const u2 = factoryFun("Ali")

u1.greet()
u2.greet()

// factoryFun() returns a new object
// No new keyword is used
//one fun can be used for creating obj for diffrent entity
//but greet will be created for every instance but in fun
//  contructor or class , method goes to prototype so for every instance it is same
