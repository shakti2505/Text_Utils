import React, { useState } from "react"
import Navbar from "./components/Navbar";
import Textarea from "./components/TextForm";
import About from "./components/About";
import Alerts from "./components/Alerts";
import {
  BrowserRouter as Router,
  Routes,
  Route,  
} from "react-router-dom";



function App(){
  
  const [darkMode, setDarkMode]  = useState('light'); // weather dark mode is enable or not
  const [dmsbtnText, setDmsbtnText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null)

  const showAlert=(messasge, type)=>{
    setAlert({
      msg:messasge,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }


  const toggleMode = ()=>{
    if(darkMode==="light"){
      setDarkMode('dark') 
      setDmsbtnText('Disable Dark Mode')
      showAlert('Dark mode has been enabled', 'Success')
      document.body.style.backgroundColor='#343a40';
      document.title="TextUtils- Dark Mode"
    }else{
      setDarkMode('light')
      setDmsbtnText('Enable Dark Mode')
      showAlert('Light mode has been enabled', 'Success')
      document.body.style.backgroundColor='white';
      document.title="TextUtils - Light Mode"
    }
  }
  return (
    <Router>
    <div>
      
      <Navbar title="TextUtils" abouttext="About Us" mode={darkMode} toggleMode={toggleMode} btntxt={dmsbtnText} />
      <Alerts alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route path="/about" element={<About/>}>
          </Route>
          <Route path="/" element={<Textarea heading="Enter the text to analyze" mode={darkMode} showAlert={showAlert}/>}>
          </Route>
        </Routes>
      </div>
    </div>
    </Router>
  );

}

export default App;