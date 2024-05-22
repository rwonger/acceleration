import './App.css'
import Clock from './Clock'
import bg from '/public/background.jpg'

function App() {

  return (
  
      // <div className='container' style={{ backgroundImage: `url(${bg})` }}>
        <div className='main-content font-semibold text-slate-100'>
          <div className='main-clock'>
            <Clock />
          </div>
          <h2 className='greeting'>Good afternoon, Ricky</h2>
        </div>
      // </div>
    
  )
}

export default App
