// quản lý lớp môn học
import Person from "../person.js"

export default class Student extends Person {
    studentId
    year
    constructor(name,age,studentId,year){
        super(name,age)
        this.studentId = studentId
        this.year =  year
    }
    update(data){
        for(let key in data){
            if(this[key] != undefined && key != "studentId"){
                this[key] = data[key]
            }
        }
    }
}
