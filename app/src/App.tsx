import { useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Content from './components/Content';

function App() {
  if(localStorage.getItem('theme') === null) {
    localStorage.setItem('theme', 'light')
  }

  let localTheme = localStorage.getItem('theme')
  console.log(localTheme)

  const [newsText, setNewsText] = useState('')
  const [theme, setTheme] = useState(localTheme);

  useEffect(() => {
    if(theme === 'dark') {
      document.documentElement.classList.add("dark");
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  function handleThemeSwitch() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }
  // useEffect(() => {
  //   fetch("http://127.0.0.1:5000/testing").then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setNewsText(data['Response'])
  //       console.log(data)
  //     }
  //   )
  // }, [])

  return (
    <div className="dark:text-white h-screen flex flex-col">
      {/* Navbar (Did this for dark mode toggle) */}
      <div className="bg-blue-400 dark:bg-gray-700 p-4 text-xl flex align-middle">
        <h1>NewsBriefAI</h1>
        <div className="ml-auto flex gap-6">
          <a href="" className="justify-center">
            Source <GitHubIcon />
          </a>
          <button onClick={handleThemeSwitch}>
            {theme === 'light' ? <DarkModeIcon/> : <LightModeIcon/>}
          </button>
        </div>
      </div>

      {/* Rest of the website here */}
      <Content />
    </div>
  )
}

export default App
