import React from 'react';
import style from './RegisterationPage4.module.css';

function RegisterationPage4({ onNext, onPrevious }) { 
  return (
    <>
      <div className={style.container}>
        <h1 className={style.heading}>Account Security</h1>
        <hr />
        
        <form action="" method="post" className={style.form}>
          <div className={style.wrap}>
            <label htmlFor="password" className={style.label}>Password: </label>
            <input type="password" id="password" placeholder="Enter new password" className={style.input} />
            <span className={style.focusBorder}></span>
          </div>
          
          <div className={style.wrap}>
            <label htmlFor="confirmPassword" className={style.label}>Confirm Password: </label>
            <input type="password" id="confirmPassword" placeholder="Confirm your password" className={style.input} />
            <span className={style.focusBorder}></span>
          </div>
          
          <button type='button' className={style.btn2} onClick={onPrevious}>Previous</button>
          <button type='button' className={style.btn} onClick={onNext}>Save & Next</button>
        </form>
      </div>
    </>
  );
}

export default RegisterationPage4;
