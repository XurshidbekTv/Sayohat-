import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

function Counter(){
const [count, setCount]=useState(0);
const [step, setStep]=useState(1);
const date=new Date("june 21 2027");
date.setDate(date.getDate()+count);
  return(
    <div className='box'>
       <div>
        <button className='fw-bold px-5 rounded btn btn-primary m-3' onClick={()=>setStep((c)=>c-1)}>-</button>
        <span className='fw-bold fs-5'>Step:{step}</span>
        <button className='fw-bold px-5 rounded btn btn-primary m-3' onClick={()=>setStep((c)=>c+1)}>+</button>
      </div>
      <div>
        <button className='fw-bold px-5 rounded btn btn-primary m-3' onClick={()=>setCount((c)=>c-step)}>-</button>
        <span className='fw-bold fs-5'>Count:{count}</span>
        <button className='fw-bold px-5 rounded btn btn-primary m-3' onClick={()=>setCount((c)=>c+step)}>+</button>
      </div>
      <div className='display-5 fw-bold'>
      <span>{count===0 ? "Today is " :count>0 ? `${count} days from today is `: count<0  `${Math.abs(count)} days ago was ` }</span>
      <span>{date.toDateString()}</span>
      </div>
    </div>
  )
}
export default App;
