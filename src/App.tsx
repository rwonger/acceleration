import './App.css'
import Clock from './Clock'
import GreetingMessage from './GreetingMessage'

function App() {

  return (
    <div className='main-content font-semibold text-slate-100'>
      <div className='main-clock mb-1'>
        <Clock />
      </div>
      <GreetingMessage />
    </div>
  )
}

export default App
