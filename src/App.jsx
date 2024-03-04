import { useState } from "react"
import './calulator.css';
import './App.css';

export default function App(){
  const [inputValue , setInputValue] = useState("");

  const  display = (value)=>{
    setInputValue(inputValue + value);
  }

  const clearInputValue = ()=>{
    setInputValue("");
  }

  const result = ()=>{
    setInputValue(eval(inputValue));
  }
  return <>
    <div className="container">
      <h1>Calculate</h1>
      <form className="calculator">
        <input type="text" className="calcu" value={inputValue}/>
        <span className="num_clear" onClick={()=>clearInputValue("")}>clear</span>
        <span onClick={()=>display("/")}>/</span>
        <span onClick={()=>display("%")}>%</span>
        <span onClick={()=>display("7")}>7</span>
        <span onClick={()=>display("8")}>8</span>
        <span onClick={()=>display("9")}>9</span>
        <span onClick={()=>display("*")}>*</span>
        <span onClick={()=>display("4")}>4</span>
        <span onClick={()=>display("5")}>5</span>
        <span onClick={()=>display("6")}>6</span>
        <span onClick={()=>display("-")}>-</span>
        <span onClick={()=>display("1")}>1</span>
        <span onClick={()=>display("2")}>2</span>
        <span onClick={()=>display("3")}>3</span>
        <span onClick={()=>display("+")}>+</span>
        <span onClick={()=>display("0")}>0</span>
        <span onClick={()=>display("00")}>00</span>
        <span onClick={()=>display(".")}>.</span>
        <span className="equal" onClick={result}>=</span>
      </form>
    </div>
  </>
}