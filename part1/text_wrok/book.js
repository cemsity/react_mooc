const stephen = {
    name: "Stephen Hilson",
    greet: function() {
        console.log("Hello my name is",this.name)
    }
}

const daniel = {
    name: "Daniel Hilson",
    greet: function() {
        console.log("Hello my name is",this.name)
    }
}

stephen.greet()
daniel.greet()


setTimeout(stephen.greet, 1000)

setTimeout(stephen.greet.bind(stephen), 1000)

setTimeout(stephen.greet.bind(daniel), 1000)

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hello Myname is (class)", this.name)
    }

}

const luke = new Person("Luke Davis", 30)
luke.greet()

const noah = new Person("Noah George", 25)
noah.greet()

setTimeout(luke.greet, 1000)
