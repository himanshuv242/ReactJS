import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  Routes,
  Route,
} from "react-router-dom";


function App(props) {

  const [mode, setMode]=useState('light');//whether dark mode enabled
  const [alert, setAlert]=useState(null);

  const [bgColor,setBgColor]=useState('#152238')

  const SetBackground = (color)=>{
    
    if(mode==='dark')
    {
      setBgColor(color);
      document.body.style.backgroundColor =bgColor ;
      console.log("re-render")
    }
  }
console.log("outside")
  //to set alert object variable from another component
  const showAlert= (message, type) => {
    setAlert({
      msg:message,
      type: type
    })
//time out to remove alert automatically
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor =bgColor ;
      showAlert("Dark mode activated.", "success");
// -----------------------------------------
      // document.title="DarkMode"
      //To attract user attention
      // setInterval(() => {
      //   document.title="TextUtils is Amazing"
      // }, 2800);
      // setInterval(() => {
      //   document.title=" Install TextUtils now"
      // }, 4000);
//--------------------------------------------


    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode activated.", "success");
    }
   
  }


  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} SetBackground={SetBackground}/>
      <Alert alert={alert}/>
      <div className="container my-3">

      <Routes>
        <Route exact path="/" element={<TextForm heading="Enter the text to analyze below:" mode={mode} showAlert={showAlert} />}/>
        <Route exact path="/About" element={<About mode={mode} toggleMode={toggleMode}/>}/>
      </Routes>
      
      
        {/* <TextForm heading="Enter the text to analyze below:" mode={mode} showAlert={showAlert} /> */}
        {/* <About mode={mode} toggleMode={toggleMode}/> */}
      </div>
      
    </>
  );
}

export default App;
