import { useEffect, useState } from 'react'
import Startup from './Startup';
import MainContent from './MainContent';
import Fade from './anim/Fade';

function App() {
  const [newUser, setNewUser] = useState(!localStorage.getItem("userName"));
  const [username, setUsername] = useState(() => localStorage.getItem('userName') || "");
  const [showMainContent, setShowMainContent] = useState(false);
  const [buffer, setBuffer] = useState(0);
  const [showStartup, setShowStartup] = useState(false);


  useEffect(() => {
    if (!newUser) {
      localStorage.setItem('userName', username);
      const timer = setTimeout(() => {
        setShowMainContent(true);
      }, buffer); //timeout duration in ms

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShowStartup(true);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [buffer, newUser, username]);


  const defaultBackgroundImage = `./sarah-sheedy-wG26ifbU1ME-unsplash.jpg`;
  const [backgroundImage, setBackgroundImage] = useState<string>(defaultBackgroundImage);
  localStorage.setItem('backupImage', defaultBackgroundImage);

  useEffect(() => {
    const storedImage = localStorage.getItem('backgroundImage');
    if (storedImage) {
      setBackgroundImage(storedImage);
    }
  }, []);


  return (
    <div className='container'>
              <div className="background-mask"></div>

      <div className="container background" style={{ backgroundImage: `url(${backgroundImage})`}}>
        <Fade in={newUser && showStartup}>
          <Startup onComplete={() => { setNewUser(false); setBuffer(1000) }} setUsername={setUsername} username={username} />
        </Fade>
        <Fade in={!newUser && showMainContent}>
          <MainContent username={username} />
        </Fade>
      </div>
    </div>
  );
}


export default App
