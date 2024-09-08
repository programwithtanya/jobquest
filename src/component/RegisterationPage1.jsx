import React from 'react';
import style from './RegisterationPage1.module.css';

function RegisterationPage1({ onNext }) { 
  return (
    <>
      <div className={style.container}>
        <h1 className={style.heading}>Personal Information</h1>
        <hr />
        
        <form action="" method="post" className={style.form}>
          <div className={style.wrap}>
            <label htmlFor="fullName" className={style.label}>Full Name: </label>
            <input type="text" id="fullName" placeholder="Enter your full name" className={style.input} />
            <span className={style.focusBorder}></span>
          </div>
          
          <div className={style.wrap}>
            <label htmlFor="emailAddress" className={style.label}>Email Address: </label>
            <input type="text" id="emailAddress" placeholder="Enter your email address" className={style.input} />
            <span className={style.focusBorder}></span>
          </div>

          <div className={style.wrap}>
            <label htmlFor="phoneNumber" className={style.label}>Phone Number: </label>
            <input type="text" id="phoneNumber" placeholder="Enter your phone number" className={style.input} />
            <span className={style.focusBorder}></span>
          </div>
          
          <div className={style.wrap}>
            <label htmlFor="companyAddress" className={style.label}>Company Address: </label>
            <input type="text" id="companyAddress" placeholder="Enter your company address" className={style.input} />
            <span className={style.focusBorder}></span>
          </div>
          
          <button type="button" className={style.btn} onClick={onNext}>
            Save & Next
          </button>
        </form>
      </div>
    </>
  );
}

export default RegisterationPage1;
