// 00_variable.js

/*
1. let
    - 값을 재할당할 수 있는 변수를 선언하는 키워드
    - 할당은 여러 번 가능하다.
    - 블록 유효 범위(block scope)를 갖는

*/


let x = 1
//let x = 2

if (x===1){
    let x = 5
    console.log(x)
}

console.log(x)

/*
2. const 
    - 값이 변하지 않는 상수를 선언하는 키워드
    - 재할당을 통해 바뀔 수 없고, 재선언 될 수 없음
    - let과 동일하게 블록 유효 범위(block)
*/

//const MY_FAV // 초기선언이 필요함
const MY_FAV = 7
console.log('my favorite number is:' + MY_FAV)

MY_FAV = 20 // 재할당이 되지 않음
const MY_FAV = 50 // 재선언도 되지 않음

if(MY_FAV === 7){
    const MY_FAV = 20
    console.log('my favorite number is:' + MY_FAV)
}

console.log(MY_FAV)

/*
3/ var
    - ES6 이전 feature로 문제를 많이 발생시키는 키워드. 절대 사용하지 않는다.
    - var로 선언된 ㄷ변수의 범위는 현재 실행 문맥인데, 그 문맥은 함수 혹은
      외부 전역으로도 갈 수 있다.
    - Hoisting(선언 끌어올리기)과 같은 현상등의 문제를 발생시키는 요인이다.
*/

function varTest(){
    var x = 1
    if(true){
        var x = 2
        console.log(x)
    }
    console.log(x)
}
varTest()


function letTest(){
    let x = 1
    if(true){
        let x = 2
        console.log(x)
    }
    console.log(x)
}
letTest()

/*
    정리
    1. var -  할당 및 선언 자유
    2. let - 할당 자유, 선언은 한번만, 블록 스코프
    3. const - 할당 및 선언 한번만, 블록 스코프
*/

/* 
4. 식별자
    - 변수명은 식별자라고 불리며, 특정 규칙을 따른다.
    - 반드시 문자, 달러($) 또는 밑줄로 시작해야 한다.
    - 대소문자를 구분하지 않으며, 클래스명을 제외하고는 대문자로 시작하지 않는다.
*/

// 숫자 문자 불리언 일 경우
let dog
let variableName

// 배열 -  복수형 이름을 사용
const dogs = []

// 함수
function getProperyName() {
    ...
}

// Boolean 반환 함수 - 반환 값이 Boolean인 함수는 'is'로 시작
let isAvailable = false

// 클래스, 생성자 (파스칼 케이스 사용)
class User{
    constructor(options){
        this.name = options.name
    }
}

const good =  new User({
    name:'eric',
})

// 상수 대문자 