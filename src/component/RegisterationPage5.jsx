import React from 'react';
import style from './RegisterationPage5.module.css';

function RegisterationPage5({ onPrevious }) { 
  return (
    <>
      <div className={style.container}>
        <h1 className={style.heading}>Verification</h1>
        <hr />
        
        <form action="" method="post" className={style.form}>
          <div className={style.wrap}>
            <label htmlFor="otp" className={style.label}>OTP: </label>
            <input type="text" id="otp" placeholder="Enter OTP number" className={style.input} />
            <span className={style.focusBorder}></span>
          </div>
          
          <button type='submit' className={style.btn}>Submit</button> 
        </form>
      </div>
    </>
  );
}

export default RegisterationPage5;
