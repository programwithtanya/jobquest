import './App.css';
import LoginPage from './component/LoginPage';
import Navbar from './component/Navbar';
import { BrowserRouter, Route , Routes } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/loginpage' element={<LoginPage/>}></Route>

  </Routes>
  </BrowserRouter>
  );
}

export default App;
