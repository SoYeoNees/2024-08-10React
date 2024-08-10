import React from 'react'
/*
    [ 타입 변수에 담기 ]
     type 타입변수명(대문자) = 타입종류
*/

type AnimalType = string | number;
let dog : AnimalType = '강아지';

type HumanType = {
    name?:string;   // 오브젝트 속성이 선택사항일때
    age:number;
}

let teacher : HumanType = {age: 25};    // {name: '채성아', age: 25}

type NumOut = (x:number, y:number) => number;
let abc : NumOut = function(x,y){
    return x + y;
}

const Ts04 = () => {
  return (
    <div>Ts04</div>
  )
}

export default Ts04