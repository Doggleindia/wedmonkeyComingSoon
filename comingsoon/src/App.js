import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ComingSoonPage from './component/ComingSoonPage';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<ComingSoonPage/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
