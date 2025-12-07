import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import WelcomePage from './components/welcome/WelcomePage'
import Home from './components/home/Home'
import Registration from './components/register/Registration';
import LogIn from './components/log-in/LogIn';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<WelcomePage/>}/>
          <Route path="/register" element={<Registration/>}/>
          <Route path="/log-in" element={<LogIn/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
