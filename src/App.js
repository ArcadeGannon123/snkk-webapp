import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NewsPage from './pages/NewsPage'
import HomePage from './pages/HomePage'
import ExtenPage from './pages/ExtenPage'
import ReliPage from './pages/ReliPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import PopularPage from './pages/PopularPage'
import Topics from './pages/Topics'
import Periodistas from './pages/Periodistas'
import ProfilePage from './pages/Dashboard'
import Aos from 'aos';
import {useEffect, useState} from 'react';
import {UserContext} from "./components/UserContext"
import TestPage from './pages/TestPage';
import NnewsPage from './pages/NnewsPage';
import DetailsPage from './pages/DetailsPage';


function App() {
  useEffect( () => {
      Aos.init({
        delay: 200,
      });
  }, [])

  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  const [point, setPoint] = useState("");
  const [topics, setTopics] = useState("");
  const [newsData, setNewsData] = useState("");

  return (
    
    <UserContext.Provider value={{token, setToken,user, setUser,point, setPoint,topics, setTopics,newsData, setNewsData}}>
      <Router>
        <Routes>
            <Route  path='/' element={<HomePage/>}/>
            <Route  path='/noticias' element={<NewsPage/>}/>
            <Route  path='/extension' element={<ExtenPage/>}/>
            <Route  path='/reliability' element={<ReliPage/>}/>
            <Route  path='/register' element={<RegisterPage/>}/>
            <Route  path='/login' element={<LoginPage/>}/>
            <Route  path='/topicos' element={<Topics/>}/>  
            <Route  path='/periodistas' element={<Periodistas/>}/>     
            <Route  path='/dashboard' element={<ProfilePage/>}/>   
            <Route  path='/populares' element={<PopularPage/>}/>   
            <Route  path='/test' element={<TestPage/>}/>  
            <Route  path='/recientes' element={<NnewsPage/>}/>
            <Route  path='/detalles/:url' element={<DetailsPage/>}/>
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}
export default App;
