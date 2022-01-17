import React from "react";
import "./style.css";
import Comp from './comp';
import  React,{useState} from "react"

export default function App() {
const [flag,setFlag] = useState(true)
 

  
  return (
    <>
       <button onClick={()=>{setFlag(!flag)}}>Switch</button>
       {flag && <Comp/>}
      
    </>
  );
}
