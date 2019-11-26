// 01_hoisting.js


//된다!!
console.log(a)
var a = 10
console.log(a)

// 아래와 같은 과정을 거친다.
var a // 1. 선언이 최상단으로 
console.log(a) // 2. 에러가 나지 않고 undefined
a = 10 // 3. 할당은 그 뒤에
console.log(a)

// let은 어떨까?
console.log(b)
var b = 10
console.log(b)