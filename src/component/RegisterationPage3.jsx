import React from 'react';
import style from './RegisterationPage3.module.css';

function RegisterationPage3({ onNext, onPrevious }) { 
  return (
    <>
      <div className={style.container}>
        <h1 className={style.heading}>Job Posting Preferences</h1>
        <hr />
        
        <form action="" method="post" className={style.form}>
          <div className={style.wrap}>
            <label htmlFor="preferredLocations" className={style.label}>Preferred Locations: </label>
            <input type="text" id="preferredLocations" placeholder="Enter preferred locations for delivery" className={style.input} />
            <span className={style.focusBorder}></span>
          </div>
          
          <div className={style.wrap}>
            <label htmlFor="averageSalary" className={style.label}>Average Salary: </label>
            <input type="text" id="averageSalary" placeholder="Enter average salary" className={style.input} />
            <span className={style.focusBorder}></span>
          </div>

          <button type='button' className={style.btn2} onClick={onPrevious}>Previous</button> 
          <button type='button' className={style.btn} onClick={onNext}>Save & Next</button>
        </form>
      </div>
    </>
  );
}

export default RegisterationPage3;
