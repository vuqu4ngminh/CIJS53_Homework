// nhập vào 1 mảng a tìm các số nguyên tố trong mảng
function checkPrime(nums){
    let count = 0;
    for(let i = 1;i <= nums;i++){
        if(nums % i == 0){
            count++;
        }
    }
    return count == 2;
}

function filterArray(array){
    for(let num of array){
        if(checkPrime(num)){
            console.log(num)
        }
    }
}

let str = prompt("Nhập vào 1 dãy số")
let arr = str.split(',')

let numbers = arr.map(function(number){
    return Number(number)
})
filterArray(numbers)
// xem lại về for in,for of, forEach (forEach không thể break và continue)