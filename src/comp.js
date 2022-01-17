import React from "react";
import "./style.css";

import  React,{useState,useEffect} from "react"

export default function App() {
  const [Count, setcount] = useState(0)
  useEffect(()=>{
    console.log("every time and count = " + Count);
  })

  useEffect(()=>{
    console.log("first time");
  },[])

  useEffect(()=>{
    console.log("when count changes");
  },[Count])

  useEffect(()=>{
  return (()=>{
    console.log("when component unmount");
  })
  },[])
  
  return (
    <div>
      
      <button onClick={()=>{setcount(Count-1)}}>-</button>
      {Count}
      <button onClick={()=>{setcount(Count+1)}}>+</button>
    </div>
  );
}
