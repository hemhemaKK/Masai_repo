import React, { useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increament = ()=>{
    setCount(prev =>prev+1);
  }
  const decreament = ()=>{
    setCount(prev => (prev>0? prev-1:0));
  }
  const reset = ()=>setCount(0);

  return (
    <div>
      <h1>React Counter</h1>
      <h3>Count: {count}</h3>
      <button onClick={increament}>Increament</button>
      <button onClick={decreament} disabled={count===0}>Decreament</button>
      <button onClick={reset}>Reset</button>
      {count === 10 && <p>Goal Reached</p>}
    </div>
  );
}

export default App;
