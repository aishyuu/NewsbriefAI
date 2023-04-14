import './App.css'

function App() {
  async function handleClick() {
    const response = await fetch('http://127.0.0.1:5000');
    console.log(response)
  }

  return (
    <div className="">
      <h1 className="text-center">Help</h1>
      <button onClick={handleClick}>Test</button>
    </div>
  )
}

export default App
