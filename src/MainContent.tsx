import Clock from "./Clock"
import GreetingMessage from "./GreetingMessage"
import WeatherComponent from "./WeatherComponent";
function MainContent({ username }) {
  return (
    <>
      <div className='header'>     <WeatherComponent />      asd</div>
      <div className='spacer'></div>
      <div className='main-content font-semibold text-slate-100'>
        <div className='main-clock mb-1'>
          <Clock />
        </div>
        <GreetingMessage username={username} />
      </div>
      <div className='spacer'></div>
      <div className='footer'>footer</div>
    </>

  );
}

export default MainContent