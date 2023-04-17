import './App.css'
import { useEffect, useState } from 'react';


function App() {
  const [newsText, setNewsText] = useState('')

  useEffect(() => {
    fetch("http://127.0.0.1:5000/testing").then(
      res => res.json()
    ).then(
      data => {
        setNewsText(data['Response'])
        console.log(data)
      }
    )
  }, [])

  return (
    <div className="">
      <h1 className="text-center">Help</h1>
      <p>{newsText}</p>
    </div>
  )
}

export default App
