import React from 'react'

const Ts02 = () => {

    /*
        [ Union Type ]
        - 변수에 어떤게 들어올지 모를 때 사용

        let 변수명 : string | number = 값;
    */

const Ts02 = () => {
    let nameOrAge: string | number = '짱구';
    let arr: (number | string)[] = [1, '2', 3];
    let obj : {data : number | string } = {data : '123'}

    let age2 : any = '짱구'; // 아무 자료나 집어넣을 수 있는 타입
    age2 = 11;
}

  return (
    <div>Ts02</div>
  )
}

export default Ts02