import React from 'react';
import RegisterationPage1 from './RegisterationPage1';
import RegisterationPage2 from './RegisterationPage2';
import RegisterationPage3 from './RegisterationPage3';
import RegisterationPage4 from './RegisterationPage4';
import RegisterationPage5 from './RegisterationPage5';

function RegisterationPage({ currentStep, handleNext, handlePrevious }) {
  const renderCurrentPage = () => {
    switch (currentStep) {
      case 1:
        return <RegisterationPage1 onNext={handleNext} />;
      case 2:
        return <RegisterationPage2 onNext={handleNext} onPrevious={handlePrevious} />;
      case 3:
        return <RegisterationPage3 onNext={handleNext} onPrevious={handlePrevious} />;
      case 4:
        return <RegisterationPage4 onNext={handleNext} onPrevious={handlePrevious} />;
      case 5:
        return <RegisterationPage5 onPrevious={handlePrevious} />;
      default:
        return null;
    }
  };

  return <>{renderCurrentPage()}</>;
}

export default RegisterationPage;
