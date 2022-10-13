import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NewsPage from './pages/NewsPage'
import HomePage from './pages/HomePage'
import ExtenPage from './pages/ExtenPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import PopularPage from './pages/PopularPage'
import Periodistas from './pages/Periodistas'
import ProfilePage from './pages/Dashboard'
import Aos from 'aos';
import {useEffect, useState} from 'react';
import {UserContext} from "./components/UserContext"
import TestPage from './pages/TestPage';
import NnewsPage from './pages/NnewsPage';
import DetailsPage from './pages/DetailsPage';
import MediaAnalysis from './pages/MediaAnalysis';
import TopicsAnalysis from './pages/TopicsAnalysis';
import SuscribePage from './pages/SuscribePage';
import UserNewsPage from './pages/UserNewsPage';
import ValidationPage from './pages/ValidationPage';
import DetailsMediaPage from './pages/DetailsMediaPage';
import WorkPage from './pages/WorkPage';
import HelpPage from "./pages/HelpPage";
import PublicProfilePage from "./pages/PublicProfilePage";


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
            <Route  path='/analizados' element={<UserNewsPage/>}/>            
            <Route  path='/trabajos' element={<WorkPage/>}/>
            <Route  path='/register' element={<RegisterPage/>}/>
            <Route  path='/login' element={<LoginPage/>}/>
            <Route  path='/periodistas' element={<Periodistas/>}/>     
            <Route  path='/dashboard' element={<ProfilePage/>}/>   
            <Route  path='/populares' element={<PopularPage/>}/>   
            <Route  path='/test' element={<TestPage/>}/>  
            <Route  path='/recientes' element={<NnewsPage/>}/>
            <Route  path='/detalles/:url' element={<DetailsPage/>}/>            
            <Route  path='/detalles/topico/:topic' element={<TopicsAnalysis/>}/>             
            <Route  path='/detalles/medio/:media' element={<DetailsMediaPage/>}/>
            <Route  path='/medios' element={<MediaAnalysis/>}/>
            <Route  path='/suscripcion' element={<SuscribePage/>}/>
            <Route path='/ayuda' element={<HelpPage/>}/>
            <Route path='/perfil/:id' element={<PublicProfilePage/>}/>
            <Route path='/validaciones' element={<ValidationPage/>}/>
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}
export default App;
