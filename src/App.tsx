import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import textLogo from './assets/Unicorn_Solutions_Text.svg';
import logoPlusText from './assets/Unicorn_Solutions_with_Text.svg';
import logo from './assets/Unicorn_Solutions.svg';
import logoBlack from './assets/Unicorn_Solutions_black.svg';
import logoWhite from './assets/Unicorn_Solutions_white.svg';
import './App.css'
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <div className='App'>
      <header className='App-header'>
        <img src={textLogo} style={{ width: 500, height: 75}} className="App-logo" alt="logo" />
        <img src={logoPlusText} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logoBlack} className="App-logo" alt="logo" />
        <img src={logoWhite} className="App-logo" alt="logo" />
      </header>
    </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
