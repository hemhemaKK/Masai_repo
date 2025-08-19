import { useState } from 'react'
import './App.css'
import Counter from './components/counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <h1>Simple Counter</h1>
       <Counter count={count} setCount={setCount}/>
      </div>
    </>
  )
}

export default App
