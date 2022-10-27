import logo from './logo.svg';
import './App.css';
import Index from './secciones';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <Router>
          <Routes>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/' element={<Index></Index>}>
            
            </Route>
          </Routes>
    </Router>
    // <div >
    //   <Index></Index>
    // </div>
  );
}

export default App;
