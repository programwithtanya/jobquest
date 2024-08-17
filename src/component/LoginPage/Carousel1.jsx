import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../../images/company.jpeg';
import deliveryBoy from '../../images/deliveryBoy.jpeg'
import jobQuest from '../../images/jobQuest.jpeg'
function Carousel1() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img src={ExampleCarouselImage} alt="Company" style={{height: '90vh' , width: '40vw' , 'border-top-left-radius': '50px' ,'border-bottom-left-radius': '50px'}}/>
        <Carousel.Caption>
          <h3>Elevate Your Business</h3>
          <p>Discover top talent and streamline your hiring process with JobQuest. Connect with skilled delivery personnel to enhance your company's efficiency.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={deliveryBoy} alt="deliveryBoy" style={{height: '90vh' , width: '40vw' , 'border-top-left-radius': '50px' ,'border-bottom-left-radius': '50px'}}/>
        <Carousel.Caption>
          <h3>Happy Deliveries, Happy Customers</h3>
          <p>Join our network of satisfied delivery professionals. At JobQuest, we value your happiness and success as much as you do. Start your journey with us today!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={jobQuest} alt="jobQuest" style={{height: '90vh' , width: '40vw' , 'border-top-left-radius': '50px' ,'border-bottom-left-radius': '50px'}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
          Be a part of a dynamic team with JobQuest. Whether you're a company looking for reliable delivery staff or a delivery professional seeking opportunities, we're here to connect you
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel1;