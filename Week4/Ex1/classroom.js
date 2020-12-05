import Student from "./student.js"

export default class Classroom {
    classId
    subject
    teacher
    students
    constructor(classId,subject,teacher){
        this.classId = classId
        this.subject = subject
        this.teacher = teacher
        this.students = []
    }
    // class methods
    addStudent(student){
        if(student instanceof Student){
            this.students.push(student)
        }
    }
    removeStudent(studentId){
        let result = "Not found !"
        let allStudent = this.students
        for(let value of allStudent){
            if(value.studentId == studentId){
                allStudent.splice(value,1)
                result = "Removed success !"
                break
            }
        }
        return result
    }
    update(data){
        for(let key in data){
            if(this[key] != undefined && key != "classId"){
                this[key] = data[key]
            }
        }
    }
    displayStudents(){
        console.log(this.students)
    }
    searchStudent(value){
        let result = []
        let allStudent = this.students
        for(let index of allStudent){
            if(value == index.name){
                result.push(index)
            } else if(value == index.studentId){
                result = index
                break
            }
        }
        return result
    }
}