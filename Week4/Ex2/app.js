// tìm người tiếp xúc gần
import Case from "./case.js"

// all cases
let allCases = [
    new Case("Nam",20,12345,3,6),
    new Case("Linh",42,14673,1,3),
    new Case("Minh",19,43252,2,0),
    new Case("Lâm",33,91245,1,1),
    new Case("Trung",14,34828,2,4),
    new Case("Hải",54,32482,1,4),
    new Case("Hiếu",29,23452,7,3),
    new Case("Huy",25,23454,7,-2),
    new Case("Đức",32,23455,0,-2),
    new Case("Bình",39,23456,0,-1),
]

// create f0
let f0 = new Case("Lê",32,12446,0,0)

// find f1
let f1 = Case.findFx(f0,allCases)
console.log(f1);

// fínd f2
let f2 = null
for(let person of f1){
    f2 = Case.findFx(person,allCases)
}
console.log(f2)