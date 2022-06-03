import React from 'react'

function Add() {
  // we can make type
  type Combine = number|string

  const combine=(
    input1: Combine,
    input2: Combine
  )=>{
    const result = +input1 + +input2;
    return result
  }
  let a:number=2;
  let b:number=3;

  let add = combine
  console.log(add(2,2));
  
  return (
    <div>
      <h3>Sum a + b = {a+b}</h3>
      <p>{combine(9,8)}</p>
       {/* <p>{combine("Tom",8)}</p> NaN */}
    </div>
  )
}

export default Add