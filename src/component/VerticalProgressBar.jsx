import React from 'react';
import style from './VerticalProgressBar.module.css';

function VerticalProgressBar({ currentStep }) {
  return (
    <div className={style.container}>
      {[1, 2, 3, 4, 5].map((step) => (
        <span key={step}>
          <div className={`${style.circle} ${currentStep >= step ? style.active : ''}`}>
            <h1>{step}</h1>
          </div>
          <span className={style.information}>
            {step === 1 && 'Personal Information'}
            {step === 2 && 'Company Information'}
            {step === 3 && 'Job Posting Preferences'}
            {step === 4 && 'Account Security'}
            {step === 5 && 'Verification'}
          </span>
        </span>
      ))}
    </div>
  );
}

export default VerticalProgressBar;

