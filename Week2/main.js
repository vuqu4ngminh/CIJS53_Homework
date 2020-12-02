// create class
class Person {
    name
    age
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
class Boy extends Person {
    handsome
    constructor(name, age, handsome) {
        super(name, age)
        this.handsome = handsome
    }
}
class Girl extends Person {
    beauty
    constructor(name, age, beauty) {
        super(name, age)
        this.beauty = beauty
    }
}
class Group {
    people
    relationships
    constructor() {
        this.people = []
        this.relationships = []
    }
    // friend methods
    addFriend(friend){
        if(friend instanceof Person){
            this.people.push(friend)
        } else {
            return false
        }
    }
    
}
class Relationship {
    a
    b
    constructor(a, b) {
        if (a instanceof Person && b instanceof Person) {
            this.a = a;
            this.b = b;
        }
    }
}
