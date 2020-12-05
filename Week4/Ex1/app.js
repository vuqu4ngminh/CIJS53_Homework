// quản lý lớp môn học
import Student from "./student.js"
import Teacher from "./teacher.js"
import Classroom from "./classroom.js"

// create students
let allStudent = [
    new Student("Minh",19,123456,"2020 - 2025"),
    new Student("Minh",19,123460,"2020 - 2025"),
    new Student("Minh",19,123461,"2020 - 2025"),
    new Student("Minh",19,123462,"2020 - 2025"),
    new Student("Lê",19,123463,"2020 - 2025"),
    new Student("Minh",19,123464,"2020 - 2025"),
    new Student("Minh",19,123465,"2020 - 2025"),
    new Student("Lâm",19,123457,"2020 - 2025"),
    new Student("Lan",19,123458,"2020 - 2025"),
    new Student("Lan",19,123466,"2020 - 2025"),
    new Student("Lan",19,123467,"2020 - 2025"),
    new Student("Phúc",19,123459,"2020 - 2025")
]

// create teacher
let teacher1 = new Teacher("Nam",35,142353,"Thạc sĩ")

// create classroom
let class1 = new Classroom(5424,"Math",teacher1)

// add student
for(let value of allStudent){
    class1.addStudent(value)
}

// update teacher
let teacher2 = new Teacher("Vinh",55,142653,"Tiến sĩ")
class1.update({teacher:teacher2})

// display students in class
class1.displayStudents()

// remove a student by id
console.log(class1.removeStudent(123461))

// search student by id
console.log(class1.searchStudent(123457))

// search student by name
console.log(class1.searchStudent("Minh"))

// update student information
let studentToUpdate = class1.searchStudent(123467)
studentToUpdate.update({name:"Nam",age:20})

console.log(class1);