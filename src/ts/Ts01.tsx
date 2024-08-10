import React from 'react'

/*
    [ 타임스크립트 ]
    - 자바스크립트에 일일히 타입을 명시해둔 언어

    [ 원시타입 type ]
     let 변수명 : 타입 = 값;
*/
const Ts01 = () =>{
    let name1 : string = '짱구';
    let age : number = 5;
    let isMan : boolean = true;

    // Array
    let children : string[] = ['짱구', '짱아'];

    // Object
    let childrenInfo : {name:string} = {name:'짱구'}

    let project = {
        member : String[];
        days: Number;
        started: boolean;
    } = {
        member:['짱구','짱아'],
        days: 30,
        started: true,    
    }
    

    return (
        <div>Ts01</div>
    )
}

export default Ts01