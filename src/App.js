import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NewsPage from './pages/NewsPage'
import HomePage from './pages/HomePage'
import ExtenPage from './pages/ExtenPage'
import ReliPage from './pages/ReliPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route  path='/' element={<HomePage/>}/>
        <Route  path='/news' element={<NewsPage/>}/>
        <Route  path='/extension' element={<ExtenPage/>}/>
        <Route  path='/reliability' element={<ReliPage/>}/>
      </Routes>
    </Router>
  );
}
export default App;
