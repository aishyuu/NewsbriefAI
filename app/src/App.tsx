import './App.css'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch("http://127.0.0.1:5000/testing").then(
      res => res.json()
    ).then(
      data => {
        console.log(data)
      }
    )
  }, [])

  return (
    <div className="">
      <h1 className="text-center">Help</h1>
    </div>
  )
}

export default App
