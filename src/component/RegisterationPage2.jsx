import React from 'react';
import style from './RegisterationPage2.module.css';

function RegisterationPage2({ onNext, onPrevious }) { 
  return (
    <>
      <div className={style.container}>
        <h1 className={style.heading}>Company Information</h1>
        <hr />
        
        <form action="" method="post" className={style.form}>
          <div className={style.wrap}>
            <label htmlFor="companyName" className={style.label}>Company Name: </label>
            <input type="text" id="companyName" placeholder="Enter your company name" className={style.input} />
            <span className={style.focusBorder}></span>
          </div>
          
          <div className={style.wrap}>
            <label htmlFor="companyWebsite" className={style.label}>Company Website: </label>
            <input type="text" id="companyWebsite" placeholder="Enter your company website" className={style.input} />
            <span className={style.focusBorder}></span>
          </div>

          <div className={style.wrap}>
            <label htmlFor="industry" className={style.label}>Industry: </label>
            <input type="text" id="industry" placeholder="Enter your industry type" className={style.input} />
            <span className={style.focusBorder}></span>
          </div>
          
          <div className={style.wrap}>
            <label htmlFor="companyAddress" className={style.label}>Company Address: </label>
            <input type="text" id="companyAddress" placeholder="Enter your company address" className={style.input} />
            <span className={style.focusBorder}></span>
          </div>

          <button type='button' className={style.btn2} onClick={onPrevious}>Previous</button>  
          <button type='button' className={style.btn} onClick={onNext}>Save & Next</button>  
        </form>
      </div>
    </>
  );
}

export default RegisterationPage2;
