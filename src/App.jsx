
import NavBar from './components/NavBar/NavBar';
import Slider from './components/Slider/Slider';
import Options from './components/Options/Options';
import Property from './components/Property/Property';
import './App.css'
import Examples from './components/Examples/Examples';

function App() {

  return (
    <div className='app-container centered'>
      <NavBar />
      <Slider />
      <Options />
      <Property />
      <Examples />

    </div>
  )
}

export default App
