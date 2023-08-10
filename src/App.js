import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './componets/user/login.js';
import Registation from './componets/user/registration.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Mycontext from './context/UserState';
import Header from './componets/header/Header';
import { Home } from './componets/main/home';
function App() {
  const [isLoggedIn,setLoggedIn] = useState(false);
  const [userId,setUserId] = useState(0);
  return (
    <Mycontext.Provider value={{isLoggedIn,setLoggedIn,userId,setUserId}}>
        <div className="App">
          <Router>
            <Header/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login />} />
              <Route path='/registration' element={<Registation />} />
            </Routes>
          </Router>
        </div>
    </Mycontext.Provider>
    
  );
}

export default App;
