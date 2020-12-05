import Person from "../person.js"

export default class Teacher extends Person {
    teacherId
    level
    constructor(name,age,teacherId,level){
        super(name,age)
        this.teacherId = teacherId
        this.level = level
    }
    update(data){
        for(let key in data){
            if(this[key] != undefined && key != "teacherId"){
                this[key] = data[key]
            }
        }
    }
}