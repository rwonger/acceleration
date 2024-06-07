import Clock from "./Clock"
import GreetingMessage from "./GreetingMessage"
import Fade from "./anim/Fade";
function MainContent({ username }) {
  return (
    <Fade in={true}>
      <div className='main-content font-semibold text-slate-100'>
        <div className='main-clock mb-1'>
          <Clock />
        </div>
        <GreetingMessage username={username} />
      </div>
    </Fade>
  );
}

export default MainContent