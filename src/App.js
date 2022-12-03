import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App(props) {

  const [mode, setMode]=useState('light');//whether dark mode enabled
  const [alert, setAlert]=useState(null);
  
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
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode activated.", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode activated.", "success");
    }
   
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze below:" mode={mode} showAlert={showAlert} />
      {/* <About mode={mode} toggleMode={toggleMode}/> */}
      </div>
      
    </>
  );
}

export default App;
