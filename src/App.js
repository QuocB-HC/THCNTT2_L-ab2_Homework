import './App.css';
import farm from './images/smart-farming.jpg'
import { FaTemperatureLow } from "react-icons/fa";
import { LuWaves } from "react-icons/lu";

function App() {
  return (
    <div>
      <div>
        <div id="title">
          <h1>LIST OF FARMS</h1>
        </div>

        <div id="container">
          <div id="farm1">
            <img src={farm} alt="farm" style={{width: "100%"}} />
            <p>FARM 01</p>
            <p>description here description here description here</p>
            <p id='tem' ><FaTemperatureLow />29.5</p>
            <p><LuWaves style={{marginLeft: "30px", color: "blue"}} size={40} /></p>
            <button id='btn'>Details</button>
          </div>

          <div id='farm2'>
            <img src={farm} alt="farm" style={{width: "100%"}} />
            <p>FARM 01</p>
            <p>description here description here description here</p>
            <p id='tem' ><FaTemperatureLow />29.5</p>
            <p><LuWaves style={{marginLeft: "30px", color: "blue"}} size={40} /></p>
            <button id='btn'>Details</button>
          </div>

          <div id='farm3'>
            <img src={farm} alt="farm" style={{width: "100%"}} />
            <p>FARM 01</p>
            <p>description here description here description here</p>
            <p id='tem' ><FaTemperatureLow />29.5</p>
            <p><LuWaves style={{marginLeft: "20px", color: "blue"}} size={40} /></p>
            <button id='btn'>Details</button>
          </div>
        </div>
      </div>
      
      <div id='switch'>
        <div>
          <h1 style={{textAlign: "center"}}>ĐIỀU KHIỂN ĐÈN LED</h1>
        </div>

        <div>
          <p style={{marginLeft: "40px"}}>Led Status:</p>
          <button className='led-btn' style={{backgroundColor: "blue"}}>ON</button>
          <button className='led-btn' style={{backgroundColor: "red"}}>OFF</button>
        </div>
      </div>
    </div>
  );
}

export default App;
