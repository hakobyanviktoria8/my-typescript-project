"use strict"; 
import React from 'react';
import imgObj from "./img/Screenshot_1.jpg"

function App() {
  // function add(a:number,b:number) {
  //   return a+b
  // }
  // // console.log(add(2,3));

//   var name:string = "John"; 
//   var score1:number = 50;
//   var score2:number = 42.50;
//   // console.log("Typeof name:string",typeof (name));
//   // console.log("Typeof name:number",typeof (score1));

//   var str = '1';
//   var str2 = str;
//   // console.log(typeof (str), typeof (str2));  

//   // let num = 2;  
//   // console.log("value of num "+num); 
//   // num = 12;
//   // console.log(num);
// let bool:boolean = true
// console.log(typeof (bool), bool)
// bool = ""?true:false

// var numm:number = -2 
// var result = numm > 0 ?"positive":"non-positive" 
// console.log(result)

// function greet(person: string, date: Date) {
//   console.log(`Hello ${person}, today is ${date.toDateString()}!`);
// }
 
// greet("Maddison", new Date());

// var num:number = 0
// var count:number = 0;

// for(num=0;num<=20;num++) {
//    if (num % 2==0) {
//       continue
//    }
//    count++
// }
// console.log (" The count of odd values between 0 and 20 is: "+count) 

// function addNumbers(...nums:number[]) {  
//   var i;   
//   var sum:number = 0; 
  
//   for(i = 0;i<nums.length;i++) { 
//      sum = sum + nums[i]; 
//   } 
//   console.log("sum of the numbers",sum) 
// } 
// addNumbers(1,2,3) 
// addNumbers(10,10,10,10,10)

var person:{
  firstname: string;
  lastname:string;
  age:number;
} = { 
  firstname:"Tom", 
  lastname:"Hanks" ,
  age:89
}; 
// //access the object values 
// console.log(person.firstname, person.age) 

let arr: string[];
arr=["jhhhh","kkkk"]
console.log(arr);

// any type
let favorite: any[];
favorite=["sdsd",122]

  return (
    <div className="App">
      <h1>Type Script</h1>
      <h2>String type</h2>
      <p>var name:string = ”mary”</p>
      <p>var name:string;</p>
      <p>var name = ”mary”</p>
      <p>var name;</p>
      <hr/>
      <h2>Array string type</h2>
      <code><pre>
      let arr: string[];
      arr=["jhhhh","kkkk"]
      </pre></code>
      <p>{arr[0]}</p>
      <hr/>
      <h2>Object type</h2>
      <img src={imgObj}/>
      <p>{person.firstname}</p>
      <p>{person.age}</p>
      <hr/>
      <h2>ANY type</h2>
      <code><pre>
        let favorite: any[];
        favorite=["sdsd",122]
      </pre></code>
      <p>{favorite[0]}</p>
    </div>
  );
}

export default App;
