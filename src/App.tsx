import { useState } from 'react'
import './App.css'
import Startup from './Startup';
import MainContent from './MainContent';

function App() {
  const [isStartup, setIsStartup] = useState(true);
  const handleComplete = () => {
    setIsStartup(false);
  }

  return (
    <div>
      {isStartup ? <Startup onComplete={handleComplete} /> : <MainContent />}
    </div>
  )
}

export default App
