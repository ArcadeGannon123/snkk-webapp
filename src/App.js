import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NewsPage from './pages/NewsPage'
import HomePage from './pages/HomePage'
import ExtenPage from './pages/ExtenPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import PopularPage from './pages/PopularPage'
import Periodistas from './pages/Periodistas'
import ProfilePage from './pages/UserDash/Dashboard'
import SearchPage from './pages/searchpage/SearchPage';
import Aos from 'aos';
import {useEffect, useState} from 'react';
import {UserContext} from "./components/UserContext"
import TestPage from './pages/TestPage';
import NnewsPage from './pages/RecentNewsPages/NnewsPage';
import MediaAnalysis from './pages/mediapages/MediaAnalysis';
import TopicsAnalysis from './pages/TopicsAnalysis';
import SuscribePage from './pages/SuscribePage';
import UserNewsPage from './pages/UserListPages/UserNewsPage';
import UserFavPage from './pages/UserListPages/UserFavPage';
import UserLaterPage from './pages/UserListPages/UserLaterPage';
import ValidationPage from './pages/ValidationPage';
import DetailsMediaPage from './pages/DetailsPages/DetailsMediaPage';
import DetailsPage from './pages/DetailsPages/DetailsPage';
import WorkPage from './pages/WorkPage';
import HelpPage from "./pages/HelpPage";
import PublicProfilePage from "./pages/PublicProfilePage";
import FeedbackPage from "./pages/premium/FeedbackPage";
import OpinionsPage from './pages/opinionpages/OpinionsPage';
import OpinionsPageDetails from './pages/opinionpages/OpinionsPage.details';
import OpinionsPageCreation from './pages/opinionpages/OpinionsPage.creation';
import DynamicChartPage from './pages/generalanalysis/DynamicChartPage';
import TwitterPage from './pages/TwitterPage/TwitterPage';
import AnalizePage from './pages/premium/AnalizePage';
import SubscribeMailPage from './pages/premium/SubscribeMailPage';
import KeywordsPage from './pages/RecentNewsPages/KeywordsPage';
import KeywordSearch from './pages/searchpage/KeywordSearch';
import './GlobalStyles/GlobalStyles.css';
import './GlobalStyles/BiasPerDays.css';
import './GlobalStyles/Feedback.css';
import './GlobalStyles/StackedBar.css';
import './GlobalStyles/BiasSelector.css';
import './GlobalStyles/MediaAnalysis.css';
import './GlobalStyles/MediaAnalysisPage.css';


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
            <Route  path='/historial' element={<UserNewsPage/>}/>   
            <Route  path='/favoritos' element={<UserFavPage/>}/>   
            <Route  path='/pendientes' element={<UserLaterPage/>}/>            
            <Route  path='/trabajos' element={<WorkPage/>}/>
            <Route  path='/register' element={<RegisterPage/>}/>
            <Route  path='/login' element={<LoginPage/>}/>
            <Route  path='/periodistas' element={<Periodistas/>}/>     
            <Route  path='/dashboard' element={<ProfilePage/>}/>   
            <Route  path='/populares' element={<PopularPage/>}/>   
            <Route  path='/test' element={<TestPage/>}/>  
            <Route  path='/recientes' element={<NnewsPage/>}/>
            <Route  path='/detalles/:id' element={<DetailsPage/>}/>            
            <Route  path='/detalles/topico/:topic' element={<TopicsAnalysis/>}/>             
            <Route  path='/detalles/medio/:media' element={<DetailsMediaPage/>}/>
            <Route  path='/medios' element={<MediaAnalysis/>}/>
            <Route  path='/suscripcion' element={<SuscribePage/>}/>
            <Route path='/ayuda' element={<HelpPage/>}/>
            <Route path='/perfil/:id' element={<PublicProfilePage/>}/>
            <Route path='/validaciones' element={<ValidationPage/>}/>  
            <Route path='/feedback' element={<FeedbackPage/>}/>  
            <Route path='/opiniones' element={<OpinionsPage/>}/>  
            <Route path='/opiniones/:detalles' element={<OpinionsPageDetails/>}/>  
            <Route path='/opiniones/crear' element={<OpinionsPageCreation/>}/>  
            <Route path='/medios/analisis' element={<DynamicChartPage/>}/>  
            <Route path='/search' element={<SearchPage/>}/>  
            <Route path='/twitter' element={<TwitterPage/>}/>  
            <Route path='/analize' element={<AnalizePage/>}/>
            <Route path='/subscribeMail' element={<SubscribeMailPage/>}/>
            <Route path='/actualidad' element={<KeywordsPage/>}/>
            <Route path='/keyword/:keyword' element={<KeywordSearch/>}/>
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}
export default App;
