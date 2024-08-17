import React from 'react'
import style from './UserLogin.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './Carousel1';
import Form1 from './Form1';
import greetingGirl from '../../images/girlGreeting.jpg'
function UserLogin() {

  return (
      <div className={` ${style.mainContainer}`}>
        <div className={` ${style.left}`}> <Carousel /></div>
        <div className={` ${style.right}`}>
            <div className={`${style.circle}`}> <img src={greetingGirl} alt="greeting" style={{height:'100px', width:'100px', 'border-radius':'50%'}}/></div>
            <div className={`${style.greeting}`}><h6>Hello Again!</h6></div>
            <div className={`${style.text}`}><h6 style={{'font-size': '0.8rem'}}>Welcome back. Ready to explore new opportunities or post your latest job listing?</h6></div>
            <div className={`${style.form}`}><Form1 /></div>
            
        </div>
      </div>
  )
}

export default UserLogin