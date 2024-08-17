  import { useState } from 'react';
import './App.css';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import UserLogin from './component/LoginPage/UserLogin'
function App() {
  const [display , setDisplay] = useState('home');
  return (
    <>
      {display === 'login' ? (
        <UserLogin />
      ) : (
        <>
          <Navbar setDisplay={setDisplay} />
          <Hero />
        </>
      )}
    </>
  );
}

export default App;
