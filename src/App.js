import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NewsPage from './pages/NewsPage'
import HomePage from './pages/HomePage'
import ExtenPage from './pages/ExtenPage'
import ReliPage from './pages/ReliPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import SesionPage from './pages/SesionPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route  path='/' element={<HomePage/>}/>
        <Route  path='/news' element={<NewsPage/>}/>
        <Route  path='/extension' element={<ExtenPage/>}/>
        <Route  path='/reliability' element={<ReliPage/>}/>
        <Route  path='/about' element={<AboutPage/>}/>
        <Route  path='/contact' element={<ContactPage/>}/>
        <Route  path='/sesion' element={<SesionPage/>}/>
      </Routes>
    </Router>
  );
}
export default App;
