import { useEffect, useState } from 'react'
import './App.css'
import Startup from './Startup';
import MainContent from './MainContent';
import Fade from './anim/Fade';

function App() {
  localStorage.clear();

  const [newUser, setNewUser] = useState(!localStorage.getItem("userName"));
  const [username, setUsername] = useState(() => localStorage.getItem('userName') || "");
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    if (!newUser) {
      localStorage.setItem('userName', username);
      const timer = setTimeout(() => {
        setShowMainContent(true);
      }, 1000); //timeout duration in ms

      return () => clearTimeout(timer);
    }
  }, [newUser, username]);

  return (
    <div className='text-slate-100'>
      <Fade in={newUser}>
        <Startup onComplete={() => setNewUser(false)} setUsername={setUsername} username={username} />
      </Fade>
      <Fade in={!newUser && showMainContent}>
          <MainContent username={username} />
      </Fade>
    </div>
  );
}


export default App
