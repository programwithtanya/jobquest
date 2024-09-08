import React, { useState } from 'react';
import RegisterationPage1 from './RegisterationPage1';
import RegisterationPage2 from './RegisterationPage2';
import RegisterationPage3 from './RegisterationPage3';
import RegisterationPage4 from './RegisterationPage4';
import RegisterationPage5 from './RegisterationPage5'; 
import VerticalProgressBar from './VerticalProgressBar';
import style from './RegisterationForm.module.css';

function RegisterationForm() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className={style.container}>
      <div className={style.left}>
        <VerticalProgressBar currentStep={currentPage} /> 
      </div>
      <div className={style.right}>
        {currentPage === 1 && <RegisterationPage1 onNext={handleNext} />}
        {currentPage === 2 && <RegisterationPage2 onNext={handleNext} onPrevious={handlePrevious} />}
        {currentPage === 3 && <RegisterationPage3 onNext={handleNext} onPrevious={handlePrevious} />}
        {currentPage === 4 && <RegisterationPage4 onNext={handleNext} onPrevious={handlePrevious} />}
        {currentPage === 5 && <RegisterationPage5 onPrevious={handlePrevious} />}
      </div>
    </div>
  );
}

export default RegisterationForm;
