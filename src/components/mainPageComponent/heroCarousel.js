import Carousel from 'react-bootstrap/Carousel'
import {useState} from 'react'
import Banner1 from '../../img/banner1.webp'
import Banner2 from '../../img/banner2.webp'
import Banner3 from '../../img/banner3.webp'
import Banner4 from '../../img/banner4.webp'
import Banner5 from '../../img/banner5.webp'

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner1}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner2}
           
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner3}
           
          />
  
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner4}
           
          />
  
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner5}

          />
  
        </Carousel.Item>
      </Carousel>
    );
  }