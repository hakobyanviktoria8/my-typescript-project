"use strict"; 
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var name:string = "John"; 
  var score1:number = 50;
  var score2:number = 42.50;
  // console.log("Typeof name:string",typeof (name));
  // console.log("Typeof name:number",typeof (score1));

  var str = '1';
  var str2 = str;
  // console.log(typeof (str), typeof (str2));  

  let num = 2;  
  // console.log("value of num "+num); 
  num = 12;
  // console.log(num);


  return (
    <div className="App">
      <h1>Type Script</h1>
      <h2>Variable Declaration Syntax</h2>
      <p>var name:string = ”mary”</p>
      <p>var name:string;</p>
      <p>var name = ”mary”</p>
      <p>var name;</p>
    </div>
  );
}

export default App;
