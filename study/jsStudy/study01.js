//데이터 타입 변환

//Number() : Number 타입 변환

const testNum = "2";
console.log(typeof Number(testNum), Number(testNum));

//parseInt () : Number 타입으로 변한하되 정수로 만듥
console.log(typeof parseInt(3.2),  parseInt(3.2));

//parseFloat() : Number 타입 변환, 부동소숫점까지
console.log(typeof parseFloat(3.2),  parseFloat(3.2));

//String() : String 타입으로 변환
console.log(typeof String(4), String(4));

//Boolean() : Boolean 타입으로 변환
console.log(typeof Boolean(2), Boolean(2));


//++ 연산자

let value = 1;
console.log (value++ === 2); 
// false -- > why? (value(1)) 값과  === 2 비교 한뒤 +1 
console.log(++value === 3); //true

//문자열 연산

let string2 = "Hello~";
console.log (string2 + " my name is young ");