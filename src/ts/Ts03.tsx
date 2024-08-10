import React from 'react'

const Ts03 = () => {
    // return이 없어야 한다면
    function myFunc1(x:number) : void {}

    // return할 자료타입
    function myFunc2(x:number) : number {
        return x*2;
    }

    // 파라미터가 옵션일 경우
    function myFunc3(x?:number) {}

    // Union type 가능
    function myFunc4(x:number | string) {}
  return (
    <div>Ts03</div>
  )
}

export default Ts03