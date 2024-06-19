import Clock from "./Clock"
import GreetingMessage from "./GreetingMessage"
import WeatherComponent from "./WeatherComponent";
import Settings from "./Settings";

interface StartupProps {
  username: string;
}

function MainContent({ username }: StartupProps) {
  return (
    <div className="container">
      <div className='header'><WeatherComponent /></div>
      <div className='spacer'></div>
      <div className='main-content font-semibold text-slate-100'>
        <div className='main-clock mb-1'>
          <Clock />
        </div>
        <GreetingMessage username={username} />

      </div>
      <div className='spacer'></div>
      <div className='footer'>        <Settings />
      </div>
    </div>

  );
}

export default MainContent