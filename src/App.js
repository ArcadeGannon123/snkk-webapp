import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NewsPage from './pages/NewsPage'
import HomePage from './pages/HomePage'
import ExtenPage from './pages/ExtenPage'
import ReliPage from './pages/ReliPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Aos from 'aos';
import {useEffect, useState} from 'react';
import {UserContext} from "./components/UserContext"


function App() {
  useEffect( () => {
      Aos.init({
        delay: 200,
      });
  }, [])

  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  const [point, setPoint] = useState("");

  return (
    
    <UserContext.Provider value={{token, setToken,user, setUser,point, setPoint}}>
      <Router>
        <Routes>
            <Route  path='/' element={<HomePage/>}/>
            <Route  path='/noticias' element={<NewsPage/>}/>
            <Route  path='/extension' element={<ExtenPage/>}/>
            <Route  path='/reliability' element={<ReliPage/>}/>
            <Route  path='/register' element={<RegisterPage/>}/>
            <Route  path='/login' element={<LoginPage/>}/>        
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}
export default App;
