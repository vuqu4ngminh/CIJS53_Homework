import Person from "../person.js"

export default class Case extends Person {
    phoneNumber
    vector2
    constructor(name, age, phoneNumber, a, b) {
        super(name, age)
        this.phoneNumber = phoneNumber
        this.vector2 = {
            x: a,
            y: b
        }
    }
    updateInfo(data) {
        for (let key in data) {
            if (this[key] != undefined) {
                this[key] = data[key]
            }
        }
    }
    // find f0 ... fn
    static findFx(fn, personArray) {
        if (fn instanceof Case) {
            // fx = f(n + 1)
            let fx = []

            for (let person of personArray) {
                let distance = Math.sqrt(Math.pow(person.vector2.x - fn.vector2.x, 2) + Math.pow(person.vector2.y - fn.vector2.y, 2))
                console.log(distance);
                if (distance < 2) {
                    fx.push(person)
                }
            }
            return fx
        }
    }
}