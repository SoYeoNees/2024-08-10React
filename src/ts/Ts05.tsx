import React from 'react'

/*
    [ interface ]
    - Object 자료형의 타입을 보다 편리하게 지정가능
    - 장점 : extends도 가능

    일반적인 상황 : type
    팀별 프로젝트 : interface
*/

interface Squre {
    color : string;
    width : number;
}

let rec1 : Squre = {color:'red', width:100}

interface Student{
    name : string;
}

// interface Teacher {
//     name : string;
//     age: number;
// }

interface Teacher extends Student {
    age: number;
}


const Ts05 = () => {

  return (
    <div>Ts05</div>
  )
}

export default Ts05