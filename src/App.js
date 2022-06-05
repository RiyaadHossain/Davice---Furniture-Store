import './App.css';
import Navbar from './Shared/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import SignUp from './Pages/LogIn/SignUp';
import LogIn from './Pages/LogIn/LogIn';
import NotFound from './Shared/NotFound/NotFound';
import Product from './Pages/Product/Product';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
