import './App.css';
import LoginPage from './component/LoginPage';
import Main from './component/Main';
import Navbar from './component/Navbar';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import RegisterationForm from './component/RegisterationForm';
function App() {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/loginpage' element={<LoginPage/>}></Route>
    <Route path='/registerationForm' element = {<RegisterationForm/>}></Route>

  </Routes>
  </BrowserRouter>
  );
}

export default App;
