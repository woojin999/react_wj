import { useState } from "react";

// 함수 선언식
export default function Counter({onTotal}) {
 const [counter,setCounter] = useState(0);

 const handleCounter = () =>{
  setCounter(counter + 1);
  onTotal();
 }
 // 상태,로직
  return <button onClick={handleCounter}>Counter : {counter}</button>;
}

// 함수 표현식
// const Counter = () =>{
//   return <button>Counter</button>
// }

// export default Counter;

// 함수 표현식 vs 함수 선언식